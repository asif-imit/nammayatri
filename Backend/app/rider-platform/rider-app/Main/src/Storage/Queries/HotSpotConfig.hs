{-
 Copyright 2022-23, Juspay India Pvt Ltd

 This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License

 as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. This program

 is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY

 or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details. You should have received a copy of

 the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
-}
{-# OPTIONS_GHC -Wno-orphans #-}

module Storage.Queries.HotSpotConfig where

import Domain.Types.HotSpotConfig
import Domain.Types.Merchant (Merchant)
import Kernel.Beam.Functions
import Kernel.Prelude
import Kernel.Types.Common
import Kernel.Types.Id
import qualified Sequelize as Se
import qualified Storage.Beam.HotSpotConfig as BeamHSC

findConfigByMerchantId :: MonadFlow m => Id Merchant -> m (Maybe HotSpotConfig)
findConfigByMerchantId merchantId = findOneWithKV [Se.Is BeamHSC.id $ Se.Eq $ getId merchantId]

instance FromTType' BeamHSC.HotSpotConfig HotSpotConfig where
  fromTType' BeamHSC.HotSpotConfigT {..} = do
    pure $
      Just
        HotSpotConfig
          { id = Id id,
            hotSpotGeoHashPrecision = hotSpotGeoHashPrecision,
            nearbyGeohashPrecision = nearbyGeohashPrecision,
            blockRadius = blockRadius,
            minFrequencyOfHotSpot = minFrequencyOfHotSpot,
            weightOfManualPickup = weightOfManualPickup,
            weightOfManualSaved = weightOfManualSaved,
            weightOfAutoPickup = weightOfAutoPickup,
            weightOfAutoSaved = weightOfAutoSaved,
            weightOfTripStart = weightOfTripStart,
            maxNumHotSpotsToShow = maxNumHotSpotsToShow,
            weightOfTripEnd = weightOfTripEnd,
            weightOfSpecialLocation = weightOfSpecialLocation,
            shouldTakeHotSpot = shouldTakeHotSpot
          }

instance ToTType' BeamHSC.HotSpotConfig HotSpotConfig where
  toTType' HotSpotConfig {..} =
    BeamHSC.HotSpotConfigT
      { BeamHSC.id = getId id,
        BeamHSC.hotSpotGeoHashPrecision = hotSpotGeoHashPrecision,
        BeamHSC.nearbyGeohashPrecision = nearbyGeohashPrecision,
        BeamHSC.blockRadius = blockRadius,
        BeamHSC.minFrequencyOfHotSpot = minFrequencyOfHotSpot,
        BeamHSC.weightOfManualPickup = weightOfManualPickup,
        BeamHSC.weightOfManualSaved = weightOfManualSaved,
        BeamHSC.weightOfAutoPickup = weightOfAutoPickup,
        BeamHSC.weightOfAutoSaved = weightOfAutoSaved,
        BeamHSC.weightOfTripStart = weightOfTripStart,
        BeamHSC.maxNumHotSpotsToShow = maxNumHotSpotsToShow,
        BeamHSC.weightOfTripEnd = weightOfTripEnd,
        BeamHSC.weightOfSpecialLocation = weightOfSpecialLocation,
        BeamHSC.shouldTakeHotSpot = shouldTakeHotSpot
      }
