module SharedLogic.Allocator.Jobs.Mandate.Notification (sendPDNNotificationToDriver) where

import Control.Monad.Extra (mapMaybeM)
import qualified Data.Map as M
import qualified Data.Map.Strict as Map
import Domain.Types.DriverFee as DF
import Domain.Types.DriverInformation as DI
import Domain.Types.DriverPlan as DPlan
import qualified Domain.Types.Invoice as INV
import Domain.Types.Mandate (Mandate)
import Domain.Types.Merchant
import Domain.Types.Merchant.TransporterConfig
import qualified Domain.Types.Notification as NTF
import Domain.Types.Person as P
import Domain.Types.Plan as Plan
import qualified Kernel.External.Payment.Interface.Types as PaymentInterface
import Kernel.Prelude
import qualified Kernel.Storage.Esqueleto as Esq
import Kernel.Types.Error
import Kernel.Types.Id (Id, cast)
import Kernel.Utils.Common
import qualified Lib.Payment.Domain.Action as APayments
import Lib.Scheduler
import Lib.Scheduler.JobStorageType.SchedulerType (createJobIn)
import SharedLogic.Allocator
import SharedLogic.DriverFee (changeAutoPayFeesAndInvoicesForDriverFeesToManual, roundToHalf)
import qualified Storage.CachedQueries.Merchant.TransporterConfig as SCT
import qualified Storage.Queries.DriverFee as QDF
import qualified Storage.Queries.DriverInformation as QDI
import qualified Storage.Queries.DriverPlan as QDP
import qualified Storage.Queries.Invoice as QINV
import qualified Storage.Queries.Notification as QNTF
import qualified Tools.Payment as TPayment

sendPDNNotificationToDriver ::
  ( CacheFlow m r,
    EsqDBFlow m r,
    Esq.EsqDBReplicaFlow m r,
    MonadFlow m,
    EncFlow m r,
    HasShortDurationRetryCfg r c,
    HasField "maxShards" r Int,
    HasField "schedulerSetName" r Text,
    HasField "schedulerType" r SchedulerType,
    HasField "jobInfoMap" r (M.Map Text Bool)
  ) =>
  Job 'SendPDNNotificationToDriver ->
  m ExecutionResult
sendPDNNotificationToDriver Job {id, jobInfo} = withLogTag ("JobId-" <> id.getId) do
  ----- added measure duration for debugging -------
  (response, timetaken) <- measureDuration $ do
    let jobData = jobInfo.jobData
        merchantId = jobData.merchantId
        startTime = jobData.startTime
        endTime = jobData.endTime

    transporterConfig <- SCT.findByMerchantId merchantId >>= fromMaybeM (TransporterConfigNotFound merchantId.getId)
    let limit = transporterConfig.driverFeeMandateNotificationBatchSize
    now <- getCurrentTime
    driverFees <- QDF.findDriverFeeInRangeWithNotifcationNotSentAndStatus merchantId limit startTime endTime DF.PAYMENT_PENDING
    if null driverFees
      then do
        maxShards <- asks (.maxShards)
        scheduleJobs transporterConfig startTime endTime merchantId maxShards
        return Complete
      else do
        let driverIdsWithPendingFee = driverFees <&> (.driverId)
        activeAutopayDrivers <- QDI.findAllByAutoPayStatusAndMerchantIdInDriverIds merchantId (Just DI.ACTIVE) driverIdsWithPendingFee
        mandateIdAndDriverIdsToNotify <- mandateIdAndDriverId <$> QDP.findAllByDriverIdsAndPaymentMode (DI.driverId <$> activeAutopayDrivers) Plan.AUTOPAY
        let driverInfoForPDNotification = mapDriverInfoForPDNNotification (Map.fromList mandateIdAndDriverIdsToNotify) driverFees
        changeAutoPayFeesAndInvoicesForDriverFeesToManual (driverFees <&> (.id)) (driverInfoForPDNotification <&> (.driverFeeId))
        driverFeeToBeNotified <-
          mapMaybeM
            ( \pdnNoticationEntity -> do
                invoice' <- listToMaybe <$> QINV.findLatestAutopayActiveByDriverFeeId pdnNoticationEntity.driverFeeId
                case invoice' of
                  Just _ -> return $ Just pdnNoticationEntity
                  Nothing -> do
                    QINV.updateInvoiceStatusByDriverFeeIds INV.INACTIVE [pdnNoticationEntity.driverFeeId]
                    QDF.updateStatus PAYMENT_OVERDUE pdnNoticationEntity.driverFeeId now
                    QDF.updateFeeType RECURRING_INVOICE now pdnNoticationEntity.driverFeeId
                    logError ("Active autopay invoice not found for driverFeeId" <> pdnNoticationEntity.driverFeeId.getId)
                    return Nothing
            )
            driverInfoForPDNotification
        QDF.updateAutopayPaymentStageByIds (Just NOTIFICATION_ATTEMPTING) (map (.driverFeeId) driverFeeToBeNotified)
        for_ driverFeeToBeNotified $ \driverToNotify -> do
          fork ("Notification call for driverFeeId : " <> driverToNotify.driverFeeId.getId) $ do
            sendAsyncNotification driverToNotify merchantId
        ReSchedule <$> getRescheduledTime transporterConfig
  logWarning ("duration of job " <> show timetaken)
  return response
  where
    mandateIdAndDriverId =
      mapMaybe
        ( \dplan ->
            case DPlan.mandateId dplan of
              Just mandateId_ -> Just (dplan.driverId, mandateId_)
              Nothing -> Nothing
        )
    mapDriverInfoForPDNNotification mapMandateByDriverId =
      mapMaybe
        ( \driverFee -> mkInfoForPDNNotification driverFee <$> (mapMandateByDriverId Map.!? (cast @P.Driver @P.Person driverFee.driverId))
        )
    mkInfoForPDNNotification driverFee_ mandateId_ =
      DriverInfoForPDNotification
        { driverId = driverFee_.driverId,
          mandateId = mandateId_,
          driverFeeId = driverFee_.id,
          amount = roundToHalf $ (fromIntegral driverFee_.govtCharges) + driverFee_.platformFee.fee + driverFee_.platformFee.cgst + driverFee_.platformFee.sgst
        }

data DriverInfoForPDNotification = DriverInfoForPDNotification
  { driverId :: Id Driver,
    mandateId :: Id Mandate,
    amount :: HighPrecMoney,
    driverFeeId :: Id DF.DriverFee
  }

getRescheduledTime :: MonadTime m => TransporterConfig -> m UTCTime
getRescheduledTime tc = addUTCTime tc.mandateNotificationRescheduleInterval <$> getCurrentTime

scheduleJobs :: (CacheFlow m r, EsqDBFlow m r, HasField "schedulerSetName" r Text, HasField "schedulerType" r SchedulerType, HasField "jobInfoMap" r (M.Map Text Bool)) => TransporterConfig -> UTCTime -> UTCTime -> Id Merchant -> Int -> m ()
scheduleJobs transporterConfig startTime endTime merchantId maxShards = do
  now <- getLocalCurrentTime transporterConfig.timeDiffFromUtc
  let dfExecutionTime = transporterConfig.driverAutoPayExecutionTime
      dfNotificationTime = transporterConfig.driverAutoPayNotificationTime
  let dfCalculationJobTs = diffUTCTime (addUTCTime (dfExecutionTime + dfNotificationTime) endTime) now
  createJobIn @_ @'MandateExecution dfCalculationJobTs maxShards $
    MandateExecutionInfo
      { merchantId = merchantId,
        startTime = startTime,
        endTime = endTime
      }

sendAsyncNotification ::
  ( MonadFlow m,
    HasShortDurationRetryCfg r c,
    EncFlow m r,
    CacheFlow m r,
    EsqDBFlow m r,
    Esq.EsqDBReplicaFlow m r
  ) =>
  DriverInfoForPDNotification ->
  Id Merchant ->
  m ()
sendAsyncNotification driverToNotify merchantId = do
  notificationId <- generateGUID
  notificationShortId <- generateShortId
  now <- getCurrentTime
  req <- mkNotificationRequest driverToNotify notificationShortId.getShortId
  exec <- try @_ @SomeException $ withShortRetry (APayments.createNotificationService req (TPayment.mandateNotification merchantId))
  case exec of
    Left err -> do
      QINV.updateInvoiceStatusByDriverFeeIds INV.INACTIVE [driverToNotify.driverFeeId]
      QDF.updateStatus PAYMENT_OVERDUE driverToNotify.driverFeeId now
      QDF.updateFeeType RECURRING_INVOICE now driverToNotify.driverFeeId
      logError ("Notification failed for driverFeeId : " <> driverToNotify.driverFeeId.getId <> " error : " <> show err)
    Right res -> do
      QNTF.create $ buildNotificationEntity res notificationId driverToNotify.driverFeeId driverToNotify.mandateId now
  where
    buildNotificationEntity response id_ driverFeeId mandateId now =
      NTF.Notification
        { id = id_,
          shortId = response.notificationId,
          sourceAmount = fromMaybe 0 response.sourceInfo.sourceAmount,
          mandateId = mandateId,
          driverFeeId = driverFeeId,
          juspayProvidedId = response.juspayProvidedId,
          txnDate = fromMaybe now response.sourceInfo.txnDate,
          providerName = response.providerName,
          notificationType = response.notificationType,
          description = response.description,
          status = response.status,
          dateCreated = fromMaybe now response.dateCreated,
          lastUpdated = fromMaybe now response.lastUpdated,
          createdAt = now,
          updatedAt = now
        }
    mkNotificationRequest driverInfoForPDN shortId = do
      now <- getCurrentTime
      return
        PaymentInterface.MandateNotificationReq
          { amount = driverInfoForPDN.amount,
            txnDate = addUTCTime (3600 * 24) now,
            mandateId = driverInfoForPDN.mandateId.getId, --- not sure regarding this m
            notificationId = shortId,
            description = "Driver fee mandate notification"
          }
