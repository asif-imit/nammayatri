{-
 Copyright 2022-23, Juspay India Pvt Ltd

 This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License

 as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. This program

 is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY

 or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details. You should have received a copy of

 the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
-}

module Domain.Action.UI.Search.Rental
  ( RentalSearchReq (..),
    RentalSearchRes (..),
    DSearch.SearchReqLocation (..),
    rentalSearch,
  )
where

import qualified Domain.Action.UI.Search.Common as DSearch
import qualified Domain.Types.Merchant as DM
import qualified Domain.Types.Person as Person
import qualified Domain.Types.SearchRequest as DSearchReq
import Kernel.Prelude
import Kernel.Serviceability
import Kernel.Storage.Esqueleto.Config (EsqDBReplicaFlow)
import Kernel.Types.Common hiding (id)
import Kernel.Types.Id
import Kernel.Types.Version (Version)
import Kernel.Utils.Common
import qualified Storage.CachedQueries.Merchant as QMerchant
import Storage.Queries.Geometry
import qualified Storage.Queries.Person as QPerson
import qualified Storage.Queries.SearchRequest as QSearchRequest
import Tools.Error
import Tools.Metrics
import qualified Tools.Metrics as Metrics

data RentalSearchReq = RentalSearchReq
  { origin :: DSearch.SearchReqLocation,
    startTime :: UTCTime
  }
  deriving (Generic, FromJSON, ToJSON, Show, ToSchema)

data RentalSearchRes = RentalSearchRes
  { origin :: DSearch.SearchReqLocation,
    searchId :: Id DSearchReq.SearchRequest,
    startTime :: UTCTime,
    gatewayUrl :: BaseUrl,
    searchRequestExpiry :: UTCTime,
    merchant :: DM.Merchant
  }

rentalSearch ::
  ( CacheFlow m r,
    EsqDBFlow m r,
    EsqDBReplicaFlow m r,
    HasFlowEnv m r '["searchRequestExpiry" ::: Maybe Seconds],
    HasBAPMetrics m r
  ) =>
  Id Person.Person ->
  Maybe Version ->
  Maybe Version ->
  Maybe Text ->
  RentalSearchReq ->
  m RentalSearchRes
rentalSearch personId bundleVersion clientVersion device req = do
  person <- QPerson.findById personId >>= fromMaybeM (PersonDoesNotExist personId.getId)
  merchant <-
    QMerchant.findById person.merchantId
      >>= fromMaybeM (MerchantNotFound person.merchantId.getId)
  validateServiceability merchant.geofencingConfig
  fromLocation <- DSearch.buildSearchReqLoc req.origin
  now <- getCurrentTime
  searchRequest <- DSearch.buildSearchRequest person fromLocation Nothing Nothing Nothing now bundleVersion clientVersion device Nothing Nothing -- Handle disabilityTag if need for rentals
  Metrics.incrementSearchRequestCount merchant.name
  let txnId = getId (searchRequest.id)
  Metrics.startSearchMetrics merchant.name txnId
  _ <- QSearchRequest.create searchRequest
  let dSearchRes =
        RentalSearchRes
          { origin = req.origin,
            searchId = searchRequest.id,
            startTime = req.startTime,
            gatewayUrl = merchant.gatewayUrl,
            searchRequestExpiry = searchRequest.validTill,
            ..
          }
  return dSearchRes
  where
    validateServiceability geoConfig = do
      unlessM (rideServiceable geoConfig someGeometriesContain req.origin.gps Nothing) $
        throwError RideNotServiceable
