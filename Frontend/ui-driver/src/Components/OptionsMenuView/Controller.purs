{-
 
  Copyright 2022-23, Juspay India Pvt Ltd
 
  This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License
 
  as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. This program
 
  is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 
  or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details. You should have received a copy of
 
  the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
-}

module Components.OptionsMenu.Controller where

import Data.Generic.Rep (class Generic)
import Prelude ((<>), class Eq)
import Font.Size as FontSize
import Language.Strings (getString)
import Language.Types(STR(..))
import Font.Style as FontStyle
import PrestoDOM (Gravity(..), Length(..), Margin(..), Padding(..), Visibility(..), height, width)
import Styles.Colors as Color
import Common.Types.App(LazyCheck(..))
import Screens.Types (IssueInfo(..),IssueModalType(..))

data Action = ItemClick String
              | BackgroundClick

type MenuItemData = {
    image :: String,
    textdata :: String,
    action :: String,
    isVisible :: Boolean
}

type Config = {
    menuItems :: Array MenuItemData,
    backgroundColor :: String,
    menuBackgroundColor :: String,
    gravity :: Gravity,
    menuExpanded :: Boolean,
    width :: Int,
    marginRight :: Int,
    itemHeight :: Int,
    itemPadding :: Int,
    cornerRadius :: Number
}

config :: Config
config = {
  menuItems : [{image : "", textdata : "", action : "", isVisible : false}],
  backgroundColor : Color.transparent,
  menuBackgroundColor : Color.white900,
  gravity : RIGHT,
  menuExpanded : false,
  width : 170,
  marginRight : 16,
  itemHeight : 50,
  itemPadding : 16,
  cornerRadius : 4.0
}