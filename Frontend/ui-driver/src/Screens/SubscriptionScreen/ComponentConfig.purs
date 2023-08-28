{-
 
  Copyright 2022-23, Juspay India Pvt Ltd
 
  This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License
 
  as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version. This program
 
  is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 
  or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details. You should have received a copy of
 
  the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.
-}

module Screens.SubscriptionScreen.ComponentConfig where

import Language.Strings
import PrestoDOM
import Engineering.Helpers.Commons as EHC
import Common.Types.App (PaymentStatus(..))
import Components.PopUpModal as PopUpModalConfig
import Components.PrimaryButton as PrimaryButton
import Components.OptionsMenu as OptionsMenuConfig
import Data.Array as DA
import Data.Maybe (isNothing)
import Data.Maybe as Mb
import Data.Semigroup ((<>))
import Font.Style (Style(..))
import JBridge as JB
import Language.Types (STR(..))
import Prelude (unit, (==), (/=), (&&), ($), (/), (>), (+))
import PrestoDOM.Types.DomAttributes (Corners(..))
import Screens.Types (SubscribePopupType(..), PlanCardConfig(..))
import Screens.Types as ST
import Styles.Colors as Color
import Helpers.Utils as HU
import Common.Types.App (LazyCheck(..))
import Data.Function.Uncurried (runFn1)

clearDueButtonConfig :: ST.SubscriptionScreenState -> PrimaryButton.Config
clearDueButtonConfig state = let
    config = PrimaryButton.config
    primaryButtonConfig' = config 
      { textConfig{ text = (getString SETUP_AUTOPAY_STR)}
      , isClickable = true
      , alpha = if true then 1.0 else 0.6
      , height = (V 48)
      , cornerRadius = 8.0
      , id = "SetupAutoPayPrimaryButton"
      , enableLoader = JB.getBtnLoader "SetupAutoPayPrimaryButton"
      , margin = (Margin 0 12 0 12)
      }
  in primaryButtonConfig'

retryPaymentButtonConfig :: ST.SubscriptionScreenState -> PrimaryButton.Config
retryPaymentButtonConfig state =
  let
    layouts = runFn1 JB.getLayoutBounds $ EHC.getNewIDWithTag $ "RetryPaymentPrimaryButton" <> "_buttonLayout"
  in
    PrimaryButton.config
      { textConfig
        { text = getString RETRY_PAYMENT_STR
        , width = WRAP_CONTENT
        , gravity = LEFT
        , height = WRAP_CONTENT
        , color = Color.white900
        , textStyle = Body4
        }
      , height = WRAP_CONTENT
      , width = WRAP_CONTENT
      , gravity = CENTER
      , cornerRadius = 24.0
      , padding = Padding 10 7 10 9
      , margin = MarginLeft 10
      , isSuffixImage = true
      , background = Color.blue800
      , suffixImageConfig
        { imageUrl = "ic_right_arrow," <> (HU.getAssetStoreLink FunctionCall) <> "ny_ic_right_arrow_blue.png"
        , height = V 16
        , width = V 16
        , margin = (MarginLeft 5)
        }
      , id = "RetryPaymentPrimaryButton"
      , enableLoader = JB.getBtnLoader "RetryPaymentPrimaryButton"
      , lottieConfig
        { width = V $ layouts.width
        , height = V $ layouts.height
        , lottieURL = (HU.getAssetsBaseUrl FunctionCall) <> "lottie/primary_button_loader_white.json"
        }
      }

switchPlanButtonConfig :: ST.SubscriptionScreenState -> PrimaryButton.Config
switchPlanButtonConfig state = let
    config = PrimaryButton.config
    primaryButtonConfig' = config 
      { textConfig{ text = ((getString SWITCH_TO)<> " " <> (getSelectedAlternatePlan state) <> " " <> (getString PLAN)) }
      , height = (V 48)
      , cornerRadius = 8.0
      , margin = (Margin 0 16 0 16)
      , visibility = if state.data.myPlanData.planEntity.id == state.props.managePlanProps.selectedPlanItem.id then GONE else VISIBLE
      }
  in primaryButtonConfig'

resumeAutopayButtonConfig :: ST.SubscriptionScreenState -> PrimaryButton.Config
resumeAutopayButtonConfig state = let
    config = PrimaryButton.config
    primaryButtonConfig' = config 
      { textConfig{ text = (getString SETUP_AUTOPAY_STR) }
      , isClickable = true
      , alpha = if true then 1.0 else 0.6
      , height = (V 48)
      , cornerRadius = 8.0
      , margin = (Margin 16 16 16 16)
      }
  in primaryButtonConfig'

joinPlanButtonConfig :: ST.SubscriptionScreenState -> PrimaryButton.Config
joinPlanButtonConfig state = let
    config = PrimaryButton.config
    primaryButtonConfig' = config 
      { textConfig{ text = case (getSelectedJoiningPlan state) of 
                                Mb.Just _ -> (getString PAY_TO_JOIN_THIS_PLAN)
                                Mb.Nothing -> (getString TAP_A_PLAN_TO_VIEW_DETAILS) }
      , isClickable = if isNothing state.props.joinPlanProps.selectedPlanItem then false else true
      , alpha = if isNothing state.props.joinPlanProps.selectedPlanItem then 0.6 else 1.0
      , height = (V 48)
      , cornerRadius = 8.0
      , id = "JoinPlanPrimaryButton"
      , enableLoader = (JB.getBtnLoader "JoinPlanPrimaryButton")
      , margin = (MarginBottom 16)
      }
  in primaryButtonConfig'

popupModalConfig :: ST.SubscriptionScreenState -> PopUpModalConfig.Config
popupModalConfig state = let
    config = PopUpModalConfig.config
    popUpConf' = config {
      cornerRadius = Corners 15.0 true true true true
      , margin = MarginHorizontal 16 16
      , padding = Padding 16 16 16 16
      , gravity = CENTER
      , backgroundColor =  Color.black9000
      , backgroundClickable = false
      , buttonLayoutMargin = MarginBottom 0
      , optionButtonOrientation = if state.props.popUpState == Mb.Just SupportPopup then "VERTICAL" else "HORIZONTAL"
    ,primaryText {
        text = case state.props.popUpState of
                  Mb.Just SuccessPopup -> (getString PLAN_ACTIVATED_SUCCESSFULLY)
                  Mb.Just FailedPopup -> (getString PAYMENT_FAILED)
                  Mb.Just DuesClearedPopup -> (getString DUES_CLEARED_SUCCESSFULLY)
                  Mb.Just CancelAutoPay -> (getString NOT_PLANNING_TO_TAKE_RIDES)
                  Mb.Just SwitchedPlan -> (getString PLAN_SWITCHED_TO) <> (if state.data.managePlanData.currentPlan.title == getString DAILY_UNLIMITED then getString DAILY_UNLIMITED else getString DAILY_PER_RIDE)
                  Mb.Just SupportPopup -> ""
                  Mb.Nothing -> ""
      , margin = Margin 16 16 16 0
      , visibility = if state.props.popUpState == Mb.Just SupportPopup then GONE else VISIBLE
      , color = Color.black800
      , textStyle = Heading2
     },
      option1 {
        text = case state.props.popUpState of
                  Mb.Just SuccessPopup -> getString GOT_IT
                  Mb.Just FailedPopup -> getString RETRY_PAYMENT_STR
                  Mb.Just DuesClearedPopup -> getString GOT_IT
                  Mb.Just SwitchedPlan -> getString GOT_IT
                  Mb.Just CancelAutoPay -> getString PAUSE_AUTOPAY_STR
                  Mb.Just SupportPopup -> getString CALL_SUPPORT
                  Mb.Nothing -> ""
      , color = Color.yellow900
      , background = Color.black
      , visibility =true
      , margin = MarginTop 16
      , width = case state.props.popUpState of
                  Mb.Just SupportPopup -> MATCH_PARENT
                  _                    -> (V 156)
      },
      coverImageConfig {
        imageUrl =  case state.props.popUpState of
          Mb.Just SuccessPopup -> "ny_ic_green_tick,https://assets.juspay.in/beckn/nammayatri/user/images/ny_ic_driver_near.png"
          Mb.Just SwitchedPlan -> "ny_ic_green_tick,https://assets.juspay.in/beckn/nammayatri/user/images/ny_ic_driver_near.png"
          Mb.Just FailedPopup -> "ny_failed,"
          Mb.Just DuesClearedPopup -> "ny_ic_green_tick,https://assets.juspay.in/beckn/nammayatri/user/images/ny_ic_driver_near.png"
          Mb.Just CancelAutoPay -> "ny_ic_pause_autopay,"
          Mb.Just SupportPopup -> ""
          Mb.Nothing -> ""
      , visibility = case state.props.popUpState of
          Mb.Just SupportPopup -> GONE
          _                    -> VISIBLE
      , width = V 114
      , height = V 114
      },
    secondaryText {
      text = if state.props.popUpState == Mb.Just FailedPopup 
                then getString YOUR_PAYMENT_WAS_UNSUCCESSFUL 
             else if state.props.popUpState == Mb.Just SupportPopup
                then getString NEED_HELP_JOINING_THE_PLAN
             else if state.data.managePlanData.currentPlan.title == getString DAILY_PER_RIDE 
                then getString DAILY_UNLIMITED_OFFER_NOT_AVAILABLE 
             else ""
      , color = Color.black700
      , margin = Margin 16 4 16 0
      , visibility = if DA.any (_ == state.props.popUpState) [Mb.Just FailedPopup, Mb.Just SwitchedPlan, Mb.Just SupportPopup] then VISIBLE else GONE
      , textStyle = if Mb.Just SupportPopup == state.props.popUpState then SubHeading1 else Body1
      },
    option2 { 
      visibility = state.props.popUpState == Mb.Just SupportPopup
      , text = getString CANCEL
      , color = Color.black650
      , background = Color.white900
      , strokeColor = Color.white900
      , width = MATCH_PARENT
      , margin = (Margin 0 0 0 0)
    },
    optionWithHtml {
      text = if state.props.popUpState == Mb.Just FailedPopup then getString NEED_HELP_CALL_SUPPORT else ""
      , color = Color.black650
      , margin = Margin 16 4 16 0
      , visibility = state.props.popUpState == Mb.Just FailedPopup
    }
    }
  in popUpConf'

confirmCancelPopupConfig :: ST.SubscriptionScreenState -> PopUpModalConfig.Config
confirmCancelPopupConfig state = let
    config = PopUpModalConfig.config
    popUpConfig' = config {
      gravity = CENTER
    , cornerRadius = Corners 15.0 true true true true
    , margin = MarginHorizontal 16 16
    , backgroundColor =  Color.black9000
    , backgroundClickable = false
    , primaryText {
        text = getString DO_YOU_WANT_TO_CANCEL
      , margin = (Margin 16 24 16 0)
      },
      secondaryText {
        text = getString DO_YOU_WANT_TO_CANCEL_DESC
      , color = Color.black700
      , margin = (Margin 16 12 16 40)
        },
      option1 {
        text = getString NO
      , color = Color.black900
      , strokeColor = Color.black700
      },
      option2 {text = getString YES_CANCEL
      , background = Color.red
      , color = Color.white900
      , strokeColor = Color.red
      , margin = MarginLeft 12
      },
      coverImageConfig {
        imageUrl = "ny_ic_pause_autopay,"
      , visibility = VISIBLE
      , width = V 265
      , height = V 265
      }
    }
  in popUpConfig'

getSelectedAlternatePlan :: ST.SubscriptionScreenState -> String
getSelectedAlternatePlan state = do
  let plan = (DA.filter(\item -> item.id == state.props.managePlanProps.selectedPlanItem.id) state.data.managePlanData.alternatePlans)
  case plan DA.!! 0 of 
    Mb.Just value -> value.title
    Mb.Nothing -> state.data.myPlanData.planEntity.title

getSelectedJoiningPlan :: ST.SubscriptionScreenState -> Mb.Maybe String
getSelectedJoiningPlan state = do
  case state.props.joinPlanProps.selectedPlanItem of
    Mb.Just planEntity -> do 
                    let plan = (DA.filter(\item -> item.id == planEntity.id) state.data.joinPlanData.allPlans)
                    case plan DA.!! 0 of 
                      Mb.Just value -> Mb.Just value.title
                      Mb.Nothing -> Mb.Nothing
    Mb.Nothing -> Mb.Nothing
  
tryAgainButtonConfig :: ST.SubscriptionScreenState -> PrimaryButton.Config
tryAgainButtonConfig state = let
    config = PrimaryButton.config
    primaryButtonConfig' = config 
      { textConfig{ text = getString TRY_AGAIN }
      , isClickable = true
      , alpha = if true then 1.0 else 0.6
      , height = V 48
      , cornerRadius = 8.0
      , margin = Margin 16 16 16 16
      }
  in primaryButtonConfig'

optionsMenuConfig :: ST.SubscriptionScreenState -> OptionsMenuConfig.Config
optionsMenuConfig state = 
  OptionsMenuConfig.config {
  menuItems = [
    {image : "ny_ic_settings_unfilled,https://assets.juspay.in/beckn/nammayatri/driver/images/ny_ic_settings_unfilled.png", textdata : getString MANAGE_PLAN, action : "manage_plan", isVisible : state.props.subView == ST.MyPlan},
    {image : "ny_ic_calendar_black,https://assets.juspay.in/beckn/nammayatri/driver/images/ny_ic_calendar_black.png", textdata : getString PAYMENT_HISTORY, action : "payment_history", isVisible : false},
    {image : "ny_ic_phone_unfilled,https://assets.juspay.in/beckn/nammayatri/driver/images/ny_ic_phone_unfilled.png", textdata : getString CALL_SUPPORT, action : "call_support", isVisible : true},
    {image : "ny_ic_message_unfilled,https://assets.juspay.in/beckn/nammayatri/driver/images/ny_ic_message_unfilled.png", textdata : getString CHAT_FOR_HELP, action : "chat_for_help", isVisible : true},
    {image : "ny_ic_help_circle_transparent,https://assets.juspay.in/beckn/nammayatri/driver/images/ny_ic_help_circle_transparent.png", textdata : getString VIEW_FAQs, action : "view_faq", isVisible : true}],
  backgroundColor = Color.blackLessTrans,
  menuBackgroundColor = Color.white900,
  gravity = RIGHT,
  menuExpanded = state.props.optionsMenuExpanded,
  width = 170,
  marginRight = 16,
  itemHeight = 50,
  itemPadding = 16,
  cornerRadius = 4.0

}

getHeaderConfig :: ST.SubscriptionSubview -> HeaderData
getHeaderConfig subView = 
  case subView of
    ST.JoinPlan    -> {title : (getString NAMMA_YATRI_PLANS), actionText : getString SUPPORT, backbutton : false}
    ST.ManagePlan  -> {title : (getString MANAGE_PLAN), actionText : "", backbutton : true}
    ST.MyPlan      -> {title : (getString PLAN), actionText : "", backbutton : false}
    ST.PlanDetails -> {title : (getString AUTOPAY_DETAILS), actionText : "", backbutton : true}
    _           -> {title : (getString NAMMA_YATRI_PLANS), actionText : "", backbutton : false}

type HeaderData = {title :: String, actionText :: String, backbutton :: Boolean}