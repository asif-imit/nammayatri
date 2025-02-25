module Domain.Types.Invoice where

import Data.Aeson
import qualified Data.Bifunctor as BF
import qualified Data.ByteString.Lazy as BSL
import qualified Data.Text as T
import qualified Data.Text.Encoding as DT
import qualified Domain.Types.DriverFee as DF
import Domain.Types.Person (Person)
import Kernel.Prelude
import Kernel.Types.Common (HighPrecMoney)
import Kernel.Types.Id
import Servant.API
import Tools.Beam.UtilsTH (mkBeamInstancesForEnum)

data Invoice = Invoice
  { id :: Id Invoice,
    invoiceShortId :: Text,
    driverFeeId :: Id DF.DriverFee,
    driverId :: Id Person,
    invoiceStatus :: InvoiceStatus,
    paymentMode :: InvoicePaymentMode,
    bankErrorMessage :: Maybe Text,
    bankErrorCode :: Maybe Text,
    bankErrorUpdatedAt :: Maybe UTCTime,
    maxMandateAmount :: Maybe HighPrecMoney,
    createdAt :: UTCTime,
    updatedAt :: UTCTime
  }
  deriving (Show, Eq, Generic, FromJSON, ToJSON, ToSchema)

data InvoiceStatus = ACTIVE_INVOICE | INACTIVE | SUCCESS | FAILED | EXPIRED deriving (Show, Read, Eq, Generic, FromJSON, ToJSON, ToSchema, Ord)

data InvoicePaymentMode = MANUAL_INVOICE | AUTOPAY_INVOICE deriving (Show, Read, Eq, Generic, FromJSON, ToJSON, ToSchema, ToParamSchema, Ord)

$(mkBeamInstancesForEnum ''InvoiceStatus)
$(mkBeamInstancesForEnum ''InvoicePaymentMode)

instance FromHttpApiData InvoiceStatus where
  parseUrlPiece = parseHeader . DT.encodeUtf8
  parseQueryParam = parseUrlPiece
  parseHeader = BF.first T.pack . eitherDecode . BSL.fromStrict

instance ToHttpApiData InvoiceStatus where
  toUrlPiece = DT.decodeUtf8 . toHeader
  toQueryParam = toUrlPiece
  toHeader = BSL.toStrict . encode

instance FromHttpApiData InvoicePaymentMode where
  parseUrlPiece = parseHeader . DT.encodeUtf8
  parseQueryParam = parseUrlPiece
  parseHeader = BF.first T.pack . eitherDecode . BSL.fromStrict

instance ToHttpApiData InvoicePaymentMode where
  toUrlPiece = DT.decodeUtf8 . toHeader
  toQueryParam = toUrlPiece
  toHeader = BSL.toStrict . encode
