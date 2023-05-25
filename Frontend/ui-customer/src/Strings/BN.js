export function getStringValue(key) {
  if (key in bengaliStrings) {
    return bengaliStrings[key];
  }
  console.error(key + " key not found in bengaliStrings");
  return "";
}

const bengaliStrings = {
  "DOWNLOAD_INVOICE": "চালান ডাউনলোড করুন",
  "REPORT_AN_ISSUE": "সমস্যা বিবৃতি করুন",
  "SUBMIT": "অনুমোদন",
  "VIEW_INVOICE": "চালান দেখুন",
  "TOTAL_AMOUNT": "মোট মূল্য",
  "AMOUNT_PAID": "পরিমাণ অর্থ প্রদান করা",
  "TRIP_DETAILS_": "ভ্রমণের বিশদ",
  "DOWNLOAD_PDF": "পিডিএফ ডাউনলোড করুন",
  "GST": "জিএসটি",
  "INVOICE": "চালান",
  "TRIP_CHARGES": "ট্রিপ চার্জ",
  "PROMOTION": "পদোন্নতি",
  "SEND_EMAIL": "ইমেইল পাঠান",
  "YOU_CAN_DESCRIBE_THE_ISSUE_YOU_FACED_HERE": "আপনি এখানে যে সমস্যার মুখোমুখি হয়েছেন তা বর্ণনা বর্ণনা করতে পারেন",
  "THANK_YOU_FOR_WRITING": "আমাদের জানানোর জন্য আপনাকে ধন্যবাদ!",
  "WE_HAVE_RECEIVED_YOUR_ISSUE": "আমরা আপনার সমস্যা জানতে পেয়েছি। আমরা কিছু সময় আপনার কাছে পৌঁছে যাব যাব।",
  "GO_HOME_": "গো হোমে",
  "LOGO": "লোগো",
  "ABOUT_APP_DESCRIPTION": "জাটি সাথি চালকদের সাথে রাইডারদের সংযোগ করার জন্য একটি উন্মুক্ত প্ল্যাটফর্ম। অ্যাপটি রাইডারদের মিটার রেট সহ একটি যাত্রা বুক করা সুবিধাজনক করে তোলে তাই ন্যূনতম ভাড়া।",
  "ABOUT": "অ্যাপ সম্পর্কিত",
  "PRIVACY_POLICY": "গোপনীয়তা নীতি",
  "SET_UP_YOUR_ACCOUNT": "আপনার অ্যাকাউন্ট সেট আপ করুন",
  "CONTINUE": "চালিয়ে যান",
  "ENTER_YOUR_NAME": "আপনার নাম লিখুন",
  "FULL_NAME": "পুরো নাম",
  "EMAIL": "ইমেল",
  "WELCOME_TEXT": "জাত্রি সাথিতে আপনাকে স্বাগতম",
  "PLEASE_CHOOSE_YOUR_PREFERRED_LANGUAGE_TO_CONTINUE": "চালিয়ে যেতে আপনার পছন্দসই ভাষা চয়ন চয়ন করুন।।",
  "WRITE_TO_US": "আমাদের লিখুন",
  "NOTE": "বিঃদ্রঃ:",
  "VISIT_MY_RIDES_SECTION_FOR_RIDE_SPECIFIC_COMPLAINTS": "রাইড নির্দিষ্ট অভিযোগের জন্য আমার রাইডস রাইডস বিভাগটি দেখুন দেখুন",
  "THANK_YOU_FOR_WRITING_TO_US": "আমাদের লেখার জন্য আপনাকে ধন্যবাদ!",
  "WE_HAVE_RECEIVED_YOUR_ISSUE_WELL_REACH_OUT_TO_YOU_IN_SOMETIME": "আমরা আপনার সমস্যা পেয়েছি। আমরা কিছু সময় আপনার কাছে পৌঁছে যাব যাব।",
  "GO_TO_HOME__": "হোম পেজে যান",
  "SUBJECT": "বিষয়",
  "YOUR_EMAIL_ID": "আপনার ইমেল আইডি",
  "DESCRIBE_YOUR_ISSUE": "আপনার সমস্যা বর্ণনা করুন",
  "ENTER_MOBILE_NUMBER": "মোবাইল নম্বর লিখুন",
  "BY_TAPPING_CONTINUE": "ট্যাপ করে চালিয়ে যান",
  "TO_THE": "আপনি সম্মত হন যে আপনি আপনি গ্রহণ করছেন",
  "ENTER_OTP": "ওটিপি লিখুন",
  "RESEND": "আবার পাঠান",
  "ENTER_YOUR_MOBILE_NUMBER": "আপনার মোবাইল নম্বর লিখুন",
  "LOGIN_USING_THE_OTP_SENT_TO": "পাঠানো ওটিপি ব্যবহার করে লগইন করুন",
  "YOUR_RECENT_RIDE": "আপনার সাম্প্রতিক যাত্রা",
  "VIEW_ALL_RIDES": "সমস্ত রাইড দেখুন",
  "ALL_TOPICS": "সমস্ত বিষয়",
  "FAQ": "FAQ",
  "REPORT_AN_ISSUE_WITH_THIS_TRIP": "এই ট্রিপে একটি সমস্যা রিপোর্ট করুন",
  "YOU_RATED": "আপনি রেট করেছেন:",
  "GETTING_STARTED_AND_FAQS": "শুরু করা এবং প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী",
  "FOR_OTHER_ISSUES_WRITE_TO_US": "অন্যান্য ইস্যুগুলির জন্য, আমাদের লিখুন",
  "HELP_AND_SUPPORT": "সাহায্য এবং সহযোগিতা",
  "OUR_SUGGESTED_PRICE_FOR_THIS_TRIP_IS": "এই ভ্রমণের জন্য আমাদের প্রস্তাবিত দাম",
  "DRIVERS_CAN_CHARGE_BETWEEN_THE_ABOVE_RANGE": "*ড্রাইভারগুলি উপরের পরিসরের মধ্যে চার্জ করতে পারে",
  "HOW_THIS_WORKS": "এটি কিভাবে কাজ করে?",
  "FINDING_RIDES_NEAR_YOU": "আপনার কাছাকাছি রাইড খোঁজা হচ্ছে...",
  "CONFIRMING_THE_RIDE_FOR_YOU": "আপনার জন্য রাইড নিশ্চিত করা হচ্ছে...",
  "CANCEL_SEARCH": "অনুসন্ধান বাতিল করুন",
  "YOUR_RIDE_IS_NOW_COMPLETE": "আপনার যাত্রা এখন সম্পূর্ণ!",
  "PLEASE_PAY_THE_FINAL_AMOUNT_TO_THE_DRIVER_VIA_CASH": "সরাসরি ড্রাইভারকে চূড়ান্ত পরিমাণ প্রদান করুন",
  "WHERE_TO": "কোথায়?",
  "HOME": "বাড়ি",
  "PICK_UP_LOCATION": "পিক আপ অবস্থান",
  "REQUEST_RIDE": "যাত্রা অনুরোধ",
  "NAME": "নাম",
  "MOBILE_NUMBER_STR": "মোবাইল নম্বর",
  "PERSONAL_DETAILS": "ব্যক্তিগত বিবরণ",
  "YOUR_RIDES": "আপনার রাইডস",
  "YOU_ARE_OFFLINE": "আপনি অফলাইন",
  "CHECK_YOUR_INTERNET_CONNECTION_AND_TRY_AGAIN": "আপনার ইন্টারনেট সংযোগ পরীক্ষা করুন এবং আবার আবার চেষ্টা করুন",
  "TRY_AGAIN": "আবার চেষ্টা করুন",
  "THANK_YOUR_DRIVER": "আপনার ড্রাইভারকে ধন্যবাদ!",
  "HOPE_YOUR_RIDE_WAS_HASSLE_FREE": "আমরা আশা করি আপনার যাত্রাটি ঝামেলা ঝামেলা মুক্ত ছিল ছিল",
  "HOW_WAS_YOUR_RIDE_WITH": "আপনার যাত্রা কেমন ছিল",
  "GOT_IT_TELL_US_MORE": "পেয়েছি, আরও বলুন?",
  "WRITE_A_COMMENT": "একটি মন্তব্য লিখুন (ঐচ্ছিক)",
  "UPDATE": "আপডেট",
  "LANGUAGE": "ভাষা",
  "OTP": "ওটিপি",
  "PAYMENT_METHOD": "অর্থপ্রদানের পদ্ধতি",
  "PAYMENT_METHOD_STRING": "নগদ / কোনও ইউপিআই অ্যাপ্লিকেশন অ্যাপ্লিকেশন করুন করুন",
  "CANCEL_RIDE": "যাত্রা বাতিল করুন",
  "SUPPORT": "সমর্থন",
  "PICKUP_AND_DROP": "পিকআপ এবং ড্রপ",
  "CANCELLED": "বাতিল করা হয়েছে",
  "HOW_THE_PRICING_WORKS": "মূল্য নির্ধারণ কিভাবে কাজ করে?",
  "SELECT_AN_OFFER": "একটি অফার নির্বাচন করুন",
  "CHOOSE_A_RIDE_AS_PER_YOUR_COMFORT": "আপনার আরাম অনুযায়ী একটি যাত্রা যাত্রা চয়ন করুন",
  "IT_SEEMS_TO_BE_A_VERY_BUSY_DAY": "খুব ব্যস্ত দিন মনে হচ্ছে। আপনি আবার রাইড খোঁজার চেষ্টা করতে পারেন",
  "SORT_BY": "ক্রমানুসার",
  "SORRY_WE_COULDNT_FIND_ANY_RIDES": "দুঃখিত, আমরা কোনও কোনও রাইড খুঁজে পাইনি",
  "LOAD_MORE": "আরো লোড করুন",
  "WE_NEED_ACCESS_TO_YOUR_LOCATION": "আমাদের আপনার অবস্থানের অ্যাক্সেস দরকার!",
  "YOUR_LOCATION_HELPS_OUR_SYSTEM": "আপনার অবস্থান আমাদের সিস্টেমকে অটোর মাধ্যমে কাছাকাছি সমস্ত ম্যাপ করতে এবং আপনাকে দ্রুততম রাইড প্রদান করতে সহায়তা করে।",
  "CALL": "ফোন করুন",
  "EMPTY_RIDES": "খালি রাইড",
  "YOU_HAVENT_TAKEN_A_TRIP_YET": "আপনি এখনও একটি ট্রিপ গ্রহণ করেননি",
  "BOOK_NOW": "এখনই বুক করুন",
  "T_AND_C_A": "ক) আপনি সম্মত হন যে আপনি বিটা পরীক্ষার একজন ইচ্ছুক অংশগ্রহণকারী এবং Juspay আপনার বিরুদ্ধে কোনো দায়বদ্ধতা থাকবে না",
  "TERMS_AND_CONDITIONS": "টি ও সি",
  "DATA_COLLECTION_AUTHORITY": "গ) আমি এতদ্বারা আমার তথ্য সংগ্রহ করার জন্য Juspay-কে নিয়োগ ও অনুমোদন করছি এবং চালিয়ে যাওয়ার মাধ্যমে, আমি ব্যবহারের শর্তাবলী এবং গোপনীয়তা নীতিতে সম্মত।",
  "DENY_ACCESS": "প্রবেশাধিকার অস্বীকার করুন",
  "PLEASE_TELL_US_WHY_YOU_WANT_TO_CANCEL": "আপনি কেন বাতিল করতে চান দয়া করে করে আমাদের বলুন",
  "MANDATORY": "বাধ্যতামূলক",
  "SOFTWARE_LICENSE": "সফ্টওয়্যার লাইসেন্স",
  "LOGOUT_": "প্রস্থান",
  "REQUEST_AUTO_RIDE": "অনুরোধ যাত্রা",
  "RATE_YOUR_RIDE": "আপনার যাত্রা রেট",
  "SKIP": "এড়িয়ে যান",
  "ERROR_404": "ত্রুটি 404",
  "PROBLEM_AT_OUR_END": "আমাদের দিকে একটি সমস্যা আছে বলে মনে হচ্ছে. আমরা আবার উপলব্ধ হলে বিজ্ঞপ্তি পান",
  "NOTIFY_ME": "আমাকে অবহিত করুন",
  "ADDRESS": "ঠিকানা",
  "CHANGE": "পরিবর্তন",
  "SAVE_AS": "সংরক্ষণ করুন",
  "ADD_TAG": "ট্যাগ যুক্ত করুন",
  "WORK": "কাজ",
  "OTHER": "অন্য",
  "SAVE": "সংরক্ষণ",
  "ADD_NEW_ADDRESS": "নতুন ঠিকানা যোগ করুন",
  "SAVED_ADDRESSES": "সংরক্ষিত ঠিকানাগুলি",
  "ADDRESSES": "ঠিকানা",
  "NO_FAVOURITES_SAVED_YET": "এখনও কোনও প্রিয় সংরক্ষণ করা হয়নি",
  "SAVED_ADDRESS_HELPS_YOU_KEEP_YOUR_FAVOURITE_PLACES_HANDY": "প্রিয় অবস্থান আপনার ঘন ঘন পরিদর্শন করা জায়গাগুলি সহজ রাখতে সহায়তা করে",
  "COPIED": "কপি করা হয়েছে",
  "TRIP_ID": "ট্রিপ আইডি",
  "SAVE_PLACE": "জায়গা সংরক্ষণ করুন",
  "RIDE_FARE": "রাইড ভাড়া",
  "ASK_FOR_PRICE": "দাম জিজ্ঞাসা করুন",
  "ASK_FOR_PRICE_INFO": "চালকদের দ্বারা ভ্রমণ করা পিক-আপ দূরত্বের জন্য অতিরিক্ত 10 টাকা নামমাত্র ফি সহ আপনি সরকার নির্ধারিত মূল মূল্যের উপর ভিত্তি করে একটি ভাড়া পাবেন। কিছু ড্রাইভার শুধুমাত্র তাদের বিবেচনার ভিত্তিতে ট্রাফিক, রিটার্ন ট্রিপের সম্ভাবনা ইত্যাদি বিষয়গুলি কভার করার জন্য নামমাত্র টিপসের অনুরোধ করতে পারে।",
  "GET_ESTIMATE_FARE": "আনুমানিক ভাড়া পান",
  "SELECT_AN_OFFER_FROM_OUR_DRIVERS": "একটি অফার নির্বাচন করুন (ঐচ্ছিক)",
  "SELECT_AN_OFFER_FROM_OUR_DRIVERS_INFO": "ডিফল্টরূপে, যখন অটো-অ্যাসাইন একটি রাইড সক্ষম করা থাকে, তখন আপনাকে একজন ড্রাইভার নিয়োগ করা হয় যে অনুমান পরিসরের মধ্যে প্রথমে অনুরোধটি গ্রহণ করে। পরিবর্তে, আপনি যদি একটি ড্রাইভার অফার চয়ন করতে চান, তাহলে আপনি অক্ষম করতে পারেন এবং এগিয়ে যেতে পারেন।",
  "PAY_THE_DRIVER": "ড্রাইভারকে বেতন দিন",
  "PAY_THE_DRIVER_INFO": "ড্রাইভারকে সরাসরি অর্থ প্রদান করুন, যে মূল্য আপনি নিশ্চিত করেছেন",
  "PAY_THE_DRIVER_NOTE": "(রাইড দূরত্ব পরিবর্তন হলে মোট ভাড়া পরিবর্তন হতে পারে)",
  "UPDATE_PERSONAL_DETAILS": "ব্যক্তিগত বিবরণ আপডেট করুন",
  "EDIT": "এডিট করুন",
  "DEL_ACCOUNT": "অ্যাকাউন্ট মুছে ফেলুন",
  "ACCOUNT_DELETION_CONFIRMATION": "আপনি আপনার অ্যাকাউন্ট মুছে ফেলতে চান আপনি আপনি কি নিশ্চিত? আপনার সমস্ত ব্যক্তিগত ডেটা হারিয়ে যাবে",
  "REQUEST_SUBMITTED": "অনুরোধ জমা দেওয়া হয়েছে",
  "WE_WILL_DELETE_YOUR_ACCOUNT": "আপনি আমাদের প্ল্যাটফর্ম ছেড়ে চলে যেতে দেখে আমরা দুঃখিত। আমরা আগামী 30 দিনের মধ্যে আপনার অ্যাকাউন্ট মুছে ফেলব। আপনি যদি আপনার অ্যাকাউন্টটি ধরে রাখতে চান তবে দয়া করে আমাদের সহায়তা নম্বরে কল করুন",
  "YES_DELETE_IT": "হ্যাঁ, এটি মুছুন",
  "REQUEST_TO_DELETE_ACCOUNT": "অ্যাকাউন্ট মুছে ফেলার জন্য অনুরোধ করুন",
  "CANCEL_STR": "বাতিল করুন",
  "LOADING": "লোড হচ্ছে",
  "PLEASE_WAIT_WHILE_IN_PROGRESS": "অনুগ্রহ করে প্রগতির সময় অপেক্ষা করুন",
  "SET_LOCATION_ON_MAP": "মানচিত্রে অবস্থান সেট করুন",
  "CURRENT_LOCATION": "বর্তমান অবস্থান",
  "I_AM_NOT_RECEIVING_ANY_RIDES": "আমি কোনও রাইড পাচ্ছি না",
  "DELETE": "মুছে দিন",
  "ARE_YOU_SURE_YOU_WANT_TO_LOGOUT": "আপনি লগ আউট করতে চান ?",
  "ARE_YOU_SURE_YOU_WANT_TO_CANCEL": "আপনি বাতিল করতে চান ?",
  "YOU_HAVE_RIDE_OFFERS_ARE_YOU_SURE_YOU_WANT_TO_CANCEL": "আপনার রাইড অফার রয়েছে, আপনি কি নিশ্চিত নিশ্চিত যে আপনি বাতিল করতে করতে?",
  "GO_BACK_": "ফিরে যান",
  "REGISTER_USING_DIFFERENT_NUMBER": "আপনি কি আলাদা মোবাইল নম্বর ব্যবহার করে রেজিস্টার করতে চান?",
  "YES": "হ্যাঁ",
  "NO": "না",
  "CANCEL_": "বাতিল",
  "IS_ON_THE_WAY": "পথে আছে..",
  "ENTER_4_DIGIT_OTP": "4 ডিজিটের ওটিপি লিখুন",
  "WRONG_OTP": "ভুল ওটিপি",
  "GRANT_ACCESS": "অ্যাক্সেস মঞ্জুর করুন",
  "ENTER_A_LOCATION": "একটি অবস্থান লিখুন",
  "NEARBY": "কাছাকাছি",
  "MINS_AWAY": "মিনিট দূরে",
  "PAID": "প্রদত্ত",
  "BY_CASH": "নগদে",
  "ONLINE_": "অনলাইন",
  "USER": "ব্যবহারকারী",
  "EMAIL_ALREADY_EXISTS": "ইমেল আপডেট করতে ব্যর্থ। ই - মেইল ​​টি টি আগে থেকেই আছে আছে আছে",
  "IN": "ভিতরে",
  "VERIFYING_OTP": "ওটিপি যাচাই করা হচ্ছে",
  "TRACK_LIVE_LOCATION_USING": "ব্যবহার করে লাইভ অবস্থান ট্র্যাক করুন",
  "GOOGLE_MAP_": "গুগল মানচিত্র",
  "IN_APP_TRACKING": "অ্যাপ ট্র্যাকিং এ",
  "REQUEST_TIMED_OUT": "অনুরোধ সময় শেষ হয়েছে",
  "LIMIT_EXCEEDED": "সীমাবদ্ধতা ছাড়িয়ে গেছে",
  "ERROR_OCCURED": "ত্রুটি ঘটেছে",
  "QUOTE_EXPIRED": "ত্রুটি ঘটেছে",
  "GETTING_ESTIMATES_FOR_YOU": "উদ্ধৃতি মেয়াদ উত্তীর্ণ",
  "CONFIRM_PICKUP_LOCATION": "পিকআপের অবস্থান নিশ্চিত করুন",
  "CONFIRM_DROP_LOCATION": "ড্রপ অবস্থান নিশ্চিত করুন",
  "NO_DRIVERS_AVAILABLE": "কোনও ড্রাইভার উপলব্ধ নেই",
  "ERROR_OCCURED_TRY_AGAIN": "ত্রুটি ঘটেছে. আবার চেষ্টা করুন",
  "ERROR_OCCURED_TRY_AFTER_SOMETIME": "ত্রুটি ঘটেছে. কিছু সময় পরে চেষ্টা করুন",
  "ASKED_FOR_MORE_MONEY": "আরও টাকা চেয়েছিলেন",
  "START_": "শুরু করুন",
  "LIMIT_REACHED": "সীমা পৌঁছেছে। কিছুক্ষণ পর চেষ্টা করুন",
  "RIDE_NOT_SERVICEABLE": "রাইড সেবাযোগ্য নয়",
  "CONFIRM_FOR": "জন্য নিশ্চিত করুন",
  "ETA_WAS_TOO_SHORT": "ইটিএ খুব ছোট ছিল।",
  "DRIVER_REQUESTED_TO_CANCEL": "ড্রাইভার আমাকে বাতিল করার জন্য অনুরোধ করেছিল",
  "PICK_UP_LOCATION_INCORRECT": "পিকআপের অবস্থানটি ভুল ছিল।",
  "COULD_NOT_CONNECT_TO_DRIVER": "আমি ড্রাইভারের সাথে সংযোগ করতে পারিনি।",
  "ETA_WAS_TOO_LONG": "ইটিএ খুব দীর্ঘ ছিল।",
  "OTHERS": "অন্যান্য",
  "DESTINATION_OUTSIDE_LIMITS": "প্রবেশ করা গন্তব্যটি শহরের সীমার বাইরে",
  "DROP_LOCATION_FAR_AWAY": "আপনার ড্রপের অবস্থানটি অনেক দূরে",
  "CHANGE_DROP_LOCATION": "ড্রপ অবস্থান পরিবর্তন করুন",
  "YOU_CAN_TAKE_A_WALK_OR_CONTINUE_WITH_RIDE_BOOKING": "আপনি রাইড বুকিং দিয়ে হাঁটতে বা চালিয়ে যেতে চাইতে পারেন",
  "YOUR_TRIP_IS_TOO_SHORT_YOU_ARE_JUST": "আপনার ভ্রমণের দূরত্ব খুবই কম। গন্তব্য ঠিক",
  "METERS_AWAY_FROM_YOUR_DESTINATION": "আমি দূরে!",
  "BOOK_RIDE_": "রাইড বুক করুন",
  "CANCEL_AUTO_ASSIGNING": "অটো অ্যাসাইনিং বাতিল করুন",
  "LOCATION_UNSERVICEABLE": "অবস্থান পরিষেবাযোগ্য নয়",
  "CURRENTLY_WE_ARE_LIVE_IN_": "বর্তমানে আমরা কলকাতায় থাকি, আপনি সেখানে আমাদের পরিষেবাগুলি উপভোগ করতে পারেন",
  "CHANGE_LOCATION": "অবস্থান পরিবর্তন করুন",
  "AUTO_ACCEPTING_SELECTED_RIDE": "স্বয়ংক্রিয়ভাবে গ্রহণ করা হচ্ছে",
  "THE_TRIP_IS_VERY_SHORT_AND_JUST_TAKE": "ট্রিপটি খুব সংক্ষিপ্ত এবং কেবল নিন",
  "IF_YOU_STILL_WANNA_BOOK_RIDE_CLICK_CONTINUE_AND_START_BOOKING_THE_RIDE": "আপনি যদি এখনও বুক করতে চান তাহলে চালিয়ে যান ক্লিক করুন এবং রাইড বুক করা শুরু করুন",
  "STEPS_TO_COMPLETE": "সম্পূর্ণ করার জন্য পদক্ষেপ",
  "HELP_US_WITH_YOUR_REASON": "আপনার কারণ দিয়ে আমাদের সহায়তা করুন",
  "MAX_CHAR_LIMIT_REACHED": "সর্বাধিক অক্ষর সীমা পৌঁছেছে",
  "DRIVER_WAS_NOT_REACHABLE": "ড্রাইভার পৌঁছনীয় ছিল না",
  "SHOW_ALL_OPTIONS": "সমস্ত বিকল্প দেখান",
  "EXPIRES_IN": "মেয়াদ শেষ",
  "PAY_DIRECTLY_TO_YOUR_DRIVER_USING_CASH_UPI": "*নগদ / ইউপিআই ব্যবহার করে সরাসরি আপনার ড্রাইভারকে অর্থ প্রদান করুন",
  "UPDATE_REQUIRED": "আপডেট প্রয়োজন",
  "PLEASE_UPDATE_APP_TO_CONTINUE_SERVICE": "পরিষেবা চালিয়ে যেতে অ্যাপ্লিকেশন আপডেট করুন",
  "NOT_NOW": "এখন না",
  "OF": "এর",
  "LOST_SOMETHING": "কিছু হারিয়েছে?",
  "TRY_CONNECTING_WITH_THE_DRIVER": "ড্রাইভারের সাথে সংযোগ করার চেষ্টা করুন",
  "CALL_DRIVER": "ড্রাইভারকে কল করুন",
  "NO_MORE_RIDES": "আর কোনও রাইড নেই",
  "CONTACT_SUPPORT": "সহায়তার সাথে যোগাযোগ করুন",
  "INVALID_MOBILE_NUMBER": "অকার্যকর মোবাইল নম্বর",
  "RIDE_COMPLETED": "রাইড সম্পূর্ণ হয়েছে",
  "SUBMIT_FEEDBACK": "মতামত জমা দিন",
  "HOW_WAS_YOUR_RIDE_EXPERIENCE": "আপনার যাত্রার অভিজ্ঞতা কেমন ছিল?",
  "DROP": "ড্রপ",
  "RATE_YOUR_RIDE_WITH": "এর সাথে আপনার রাইড রেট করুন",
  "VIEW_BREAKDOWN": "ব্রেকডাউন দেখুন",
  "PAY_DRIVER_USING_CASH_OR_UPI": "নগদ/ইউপিআই ব্যবহার করে ড্রাইভারকে অর্থ প্রদান করুন",
  "RATE_YOUR_DRIVER": "আপনার ড্রাইভারকে রেট দিন",
  "MY_RIDES": "আমার রাইডস",
  "RIDE_DETAILS": "রাইডের বিবরণ",
  "RIDE_ID": "রাইড আইডি",
  "SELECT_A_RIDE": "আরো বিস্তারিত জানার জন্য একটি রাইড নির্বাচন করুন",
  "CONFIRM_RIDE_": "রাইড নিশ্চিত করুন",
  "YOU_CAN_CANCEL_RIDE": "ড্রাইভারদের কাছ থেকে অফার পাওয়ার পরে আপনি বাতিল করতে পারেন",
  "ESTIMATES_CHANGED": "আপনার যাত্রার অনুমান এখন পরিবর্তিত হয়েছে",
  "ESTIMATES_REVISED_TO": "সংশোধিত অনুমান হল",
  "RATE_CARD": "রেট কার্ড",
  "NIGHT_TIME_CHARGES": "রাতের সময় চার্জ",
  "MIN_FARE_UPTO": "2 কিমি পর্যন্ত ন্যূনতম ভাড়া",
  "RATE_ABOVE_MIN_FARE": "ন্যূনতম ভাড়ার উপরে রেট",
  "DRIVER_PICKUP_CHARGES": "সেবা মূল্য",
  "NOMINAL_FARE": "নামমাত্র ভাড়া*",
  "DAY_TIMES_OF": "রাতে প্রযোজ্য দিনের ",
  "DAYTIME_CHARGES_APPLICABLE_AT_NIGHT": "x চার্জ থেকে - রাত ১০টা থেকে ভোর ৫টা",
  "NIGHT_TIMES_OF": "রাত 10 PM থেকে সকাল 5 AM পর্যন্ত ভাড়ার জন্য ",
  "DAYTIME_CHARGES_APPLIED_AT_NIGHT": "x দিনের চার্জ প্রযোজ্য (🌙)",
  "DRIVERS_MAY_QUOTE_EXTRA_TO_COVER_FOR_TRAFFIC": "* ড্রাইভার ট্রাফিক, রিটার্ন ট্রিপের সুযোগ ইত্যাদি কভার করার জন্য অতিরিক্ত উদ্ধৃতি দিতে পারে।",
  "GOT_IT": "বুঝেছি!",
  "DAY_TIME_CHARGES": "দিনের সময় চার্জ",
  "SHARE_APP": "অ্যাপ শেয়ার করুন",
  "AWAY_C": "দূরে",
  "AWAY": "দূরে",
  "AT_PICKUP": "পিকআপ এ",
  "FARE_UPDATED": "ভাড়া আপডেট হয়েছে",
  "TOTAL_FARE_MAY_CHANGE_DUE_TO_CHANGE_IN_ROUTE": "রুট পরিবর্তনের কারণে মোট ভাড়া পরিবর্তন হতে পারে",
  "AT_DROP": "ড্রপ এ",
  "EMERGENCY_HELP": "জরুরী সহায়তা",
  "CALL_POLICE": "পুলিশকে ফোন করুন",
  "ALSO_SHARE_YOUR_RIDE_STATUS_AND_LOCATION": "এছাড়াও আপনার রাইড স্ট্যাটাস এবং লোকেশন শেয়ার করে",
  "SHARE_RIDE_WITH_EMERGENCY_CONTACTS": "জরুরী পরিচিতিদের সাথে রাইড শেয়ার করুন",
  "DO_YOU_NEED_EMERGENCY_HELP": "আপনার কি জরুরি সহায়তা দরকার?",
  "CALL_SUPPORT": "সাপোর্টে কল করুন",
  "YOU_ARE_ABOUT_TO_CALL_NAMMA_YATRI_SUPPORT": "আপনি নাম্মা ইয়াত্রি সমর্থন দলকে কল করতে চলেছেন। আপনি কি এগিয়ে যেতে চান?",
  "YOU_ARE_ABOUT_TO_CALL_JATRI_SATHI_SUPPORT": "You are about to place a call to the Jatri Sathi Support Team. Do you want to proceed?",
  "YOU_ARE_ABOUT_TO_CALL_YATRI_SUPPORT": "You are about to place a call to the Yatri Support Team. Do you want to proceed?",
  "YOU_ARE_ABOUT_TO_CALL_POLICE": "আপনি পুলিশকে কল করতে চলেছেন। আপনি কি এগিয়ে যেতে চান?",
  "DAIL_100": "ডায়াল 100?",
  "HELP_US_WITH_YOUR_FEEDBACK": "আপনার মতামত দিয়ে আমাদের সহায়তা করুন",
  "WAIT_TIME": "অপেক্ষার সময়",
  "FAVOURITES": "প্রিয়",
  "ADD_FAVOURITE": "প্রিয় যোগ করুন",
  "ALL_FAVOURITES": "সমস্ত প্রিয়",
  "REMOVE": "অপসারণ করুন",
  "CONFIRM_LOCATION": "অবস্থান নিশ্চিত করুন",
  "SELECT_ON_MAP": "মানচিত্রে নির্বাচন করুন",
  "FAVOURITE_LOCATION": "প্রিয় অবস্থান",
  "EDIT_FAVOURITE": "প্রিয় এডিট করুন",
  "DRAG_THE_MAP": "মানচিত্রটি টেনে আনুন এবং সঠিক স্থানে পিন সেট করুন",
  "CHOOSE_ON_MAP": "মানচিত্রে চয়ন করুন",
  "USE_CURRENT_LOCATION": "বর্তমান অবস্থান ব্যবহার করুন",
  "FAVOURITE_YOUR_CURRENT_LOCATION": "আপনার বর্তমান অবস্থান পছন্দ করুন",
  "LOCATION": "অবস্থান",
  "LOCATION_ALREADY_EXISTS_AS": "অবস্থান ইতিমধ্যেই হিসাবে বিদ্যমান",
  "GIVE_THIS_LOCATION_A_NAME": "এই অবস্থানের একটি নাম দিন",
  "FAVOURITE": "প্রিয়",
  "CONFIRM_AND_SAVE": "নিশ্চিত করুন এবং সংরক্ষণ করুন",
  "REMOVE_FAVOURITE": "প্রিয় সরান",
  "ARE_YOU_SURE_YOU_WANT_TO_REMOVE_FAVOURITE_": "আপনি কি নিশ্চিত যে আপনি একটি প্রিয় অবস্থান সরাতে চান?",
  "YES_REMOVE": "হ্যাঁ, সরান",
  "ADD_NEW_FAVOURITE": "নতুন প্রিয় যুক্ত করুন",
  "SELECT_YOUR_DROP": "আপনার ড্রপ নির্বাচন করুন",
  "FAVOURITE_REMOVED_SUCCESSFULLY": "প্রিয় সফলভাবে সরানো হয়েছে",
  "LOCATION_ALREADY_EXISTS": "অবস্থান ইতিমধ্যে বিদ্যমান",
  "FAVOURITE_LIMIT_REACHED": "প্রিয় সীমা পৌঁছেছে",
  "LOCATION_ALREADY": "ইতিমধ্যে অবস্থান",
  "EXISTS_AS": "হিসাবে বিদ্যমান",
  "FAVOURITE_ADDED_SUCCESSFULLY": "প্রিয় সফলভাবে যোগ করা হয়েছে",
  "FAVOURITE_UPDATED_SUCCESSFULLY": "প্রিয় সফলভাবে আপডেট করা হয়েছে",
  "ALREADY_EXISTS": "আগে থেকেই আছে",
  "NAME_ALREADY_IN_USE": "নাম ইতিমধ্যেই ব্যবহার করা হচ্ছে",
  "SELECT_FAVOURITE": "প্রিয় নির্বাচন করুন",
  "CONFIRM_CHANGES": "পরিবর্তনগুলি নিশ্চিত করুন",
  "ADD_SAVED_LOCATION_FROM_SETTINGS": "*আপনি সাইড মেনু> ফেভারিট থেকে নতুন প্রিয় যুক্ত করতে পারেন",
  "YOU_WILL_BE_ASKED_TO_SELECT_CONTACTS": "আপনাকে 3 টি পরিচিতি নির্বাচন করতে বলা হবে",
  "AUTO_ASSIGN_A_RIDE": "একটি যাত্রা অটো-অ্যাসাইন করুন",
  "IS_WAITING_FOR_YOU": "আপনার জন্য অপেক্ষা করছে...",
  "WAIT_TIME_TOO_LONG": "অপেক্ষার সময়টা খুব বেশি",
  "GOT_ANOTHER_RIDE_ELSE_WHERE": "অন্য কোথাও অন্য একটি যাত্রা পেয়েছি",
  "DRIVER_WAS_RUDE": "ড্রাইভার অভদ্র ছিল",
  "MAYBE_LATER": "পরে হতে পারে",
  "YOUR_RIDE_HAS_STARTED": "হ্যাঁ! আপনার যাত্রা শুরু হয়েছে 🤩",
  "ENJOY_RIDING_WITH_US": "আমাদের সাথে রাইডিং উপভোগ করছেন? শব্দটি ছড়িয়ে দিন এবং আনন্দ ভাগ করুন",
  "VIEW_DETAILS": "বিস্তারিত দেখুন",
  "REPEAT_RIDE": "রাইড পুনরাবৃত্তি করুন",
  "FARE_WAS_HIGH": "ভাড়া বেশি ছিল",
  "AUTO_ASSIGN_DRIVER": "একটি ড্রাইভারকে অটো-অ্যাসাইন করুন",
  "CHOOSE_BETWEEN_MULTIPLE_DRIVERS": "একাধিক ড্রাইভারের মধ্যে বেছে নিন",
  "CHOOSE_BETWEEN_MULTIPLE_RIDES": "একাধিক রাইড বিকল্পের মধ্যে বেছে নিন",
  "ENABLE_THIS_FEATURE_TO_CHOOSE_YOUR_RIDE": "আপনার পছন্দের রাইড এবং ভাড়া চয়ন করতে এই বৈশিষ্ট্যটি সক্রিয় করুন",
  "BOOKING_PREFERENCE": "বুকিং অগ্রাধিকার",
  "BASE_FARES": "বেস ভাড়া ",
  "PICKUP_CHARGE": "ড্রাইভার পিকআপ চার্জ",
  "TOTAL_PAID": "মোট প্রদত্ত",
  "WAITING_CHARGE": "অপেক্ষার চার্জ **",
  "NOMINAL_FARES": "নামমাত্র ভাড়া*",
  "DRIVERS_CAN_CHARGE_AN_ADDITIONAL_FARE_UPTO": "* ড্রাইভাররা ট্রাফিক, রিটার্ন ট্রিপের সম্ভাবনা ইত্যাদির মতো অন্যান্য বিষয়গুলি কভার করতে ₹20 পর্যন্ত অতিরিক্ত ভাড়া নিতে পারে।",
  "WAITING_CHARGE_DESCRIPTION": "** অপেক্ষার চার্জ: ₹ 1 / মিনিট - ড্রাইভার আসার 3 মিনিট পর",
  "SUCCESSFUL_ONBOARD": "আপনি সফলভাবে \n জাত্রি সাথিতে স্বাক্ষর করেছেন",
  "HAVE_REFERRAL_CODE": "একটি রেফারেল কোড আছে?",
  "REFEREAL_CODE_DISCRIPTION": "আপনার রেফারেলটি কেবল কোনও ড্রাইভারকে পুরস্কৃত করার কারণ হতে পারে!",
  "SIX_DIGIT_REFERRAL_CODE": "ড্রাইভার দ্বারা ভাগ করা 6 ডিজিট কোড লিখুন",
  "ABOUT_REFERRAL_PROGRAM": "রেফারাল প্রোগ্রাম কী?",
  "ABOUT_REFERRAL_PROGRAM_DISCRIPTION": "রেফারাল প্রোগ্রামটি ড্রাইভারদের আরও রাইড গ্রহণ করতে, কম বাতিল করতে এবং যোগ্য ড্রাইভারদের স্বীকৃতি এবং পুরস্কৃত করে আপনাকে আরও ভাল পরিবেশন করতে উত্সাহিত করে। \n \n আপনি ড্রাইভারের রেফারেল কোডটি প্রবেশ করে এবং জাত্রি সাথী সম্প্রদায়ের জন্য রাইডের গুণমান উন্নত করে সহায়তা করতে পারেন!",
  "YOU_CAN_GET_REFERRAL_CODE_FROM_DRIVER": "\n আপনি আপনার জাত্রি সাথী ড্রাইভারকে জিজ্ঞাসা করে একটি রেফারেল কোড পেতে পারেন।",
  "REFERRAL_CODE_SUCCESSFULL": "আপনি সফলভাবে প্রয়োগ করেছেন \n রেফারেল কোড!",
  "REFERRAL_CODE_APPLIED": "রেফারেল প্রয়োগ!",
  "HEY": "আরে",
  "INVALID_CODE_PLEASE_RE_ENTER": "ভুল সঙ্কেত. দয়া করে পুনরায় প্রবেশ করুন",
  "EMERGENCY_CONTACTS": "জরুরী যোগাযোগ",
  "ADD_EMERGENCY_CONTACTS": "জরুরী পরিচিতি যোগ করুন",
  "ADD_ANOTHER_CONTACT": "আরেকটি পরিচিতি যোগ করুন",
  "NO_EMERGENCY_CONTACTS_SET": "কোনো জরুরী পরিচিতি সেট নেই",
  "EMERGENCY_CONTACTS_SCREEN_DESCRIPTION": "আপনি একটি জরুরী পরিস্থিতিতে আপনার রাইড স্ট্যাটাস 3 জন \n পর্যন্ত জরুরি পরিচিতির সাথে শেয়ার করতে পারেন।",
  "CONTACTS_SELECTED": "পরিচিতি নির্বাচিত",
  "SELECT_CONTACTS": "পরিচিতি নির্বাচন করুন",
  "CONFIRM_EMERGENCY_CONTACTS": "জরুরী যোগাযোগ নিশ্চিত করুন",
  "MAXIMUM_CONTACTS_LIMIT_REACHED": "সর্বাধিক পরিচিতির সীমা পৌঁছেছে৷",
  "ARE_YOU_SURE_YOU_WANT_TO_REMOVE_CONTACT": "আপনি কি আপনার জরুরী পরিচিতিগুলি থেকে তাদের সরানোর বিষয়ে নিশ্চিত?",
  "SEARCH_CONTACTS": "পরিচিতি অনুসন্ধান করুন",
  "SELECTED_CONTACT_IS_INVALID": "নির্বাচিত পরিচিতিটি অবৈধ৷ অনুগ্রহ করে নম্বরটি পুনরায় পরীক্ষা করুন এবং আবার চেষ্টা করুন",
  "CALL_EMERGENCY_CONTACTS": "জরুরী পরিচিতি কল করুন",
  "LIVE_STATS_DASHBOARD": "লাইভ পরিসংখ্যান ড্যাশবোর্ড",
  "CHECK_OUT_LIVE_STATS": "লাইভ পরিসংখ্যান দেখুন",
  "CHOOSE_YOUR_RIDE" : "আপনার রাইড চয়ন করুন",
  "BOARD_THE_FIRST_TAXI" : "যাত্রী সাথী \nজোন থেকে প্রথম ট্যাক্সিতে চড়ুন್ತಿ",
  "PAY_VIA_CASH_OR_UPI" : "নগদ / UPI এর মাধ্যমে অর্থ প্রদান করুন",
  "LET_TRY_THAT_AGAIN": "Let's try that again...",
  "EMERGENCY_CONTACS_ADDED_SUCCESSFULLY": "জরুরী যোগাযোগ সফলভাবে যোগ করা হয়েছে",
  "NO_CONTACTS_FOUND_ON_DEVICE_TO_ADD": "যোগ করার জন্য ডিভাইসে কোনো পরিচিতি পাওয়া যায়নি",
  "NO_CONTACTS_LEFT_ON_DEVICE_TO_ADD": "যোগ করার জন্য ডিভাইসে কোনো পরিচিতি অবশিষ্ট নেই",
  "PERMISSION_DENIED": "অনুমতি অস্বীকার করা হয়েছে",
  "PERCENTAGE_OF_NOMINAL_FARE": "~বেস ভাড়ার 10%",
  "ECONOMICAL" : "অর্থনৈতিক",
  "COMFY" : "আরামদায়ক",
  "NAVIGATE" : "নেভিগেট করুন",
  "GOVERNMENT_CHAGRES" : "সরকারী চার্জ",
  "SERVICE_CHARGES" : "সেবা মূল্য",
  "CONFIRM_AND_BOOK" : "নিশ্চিত করুন এবং বুক করুন",
  "PEOPLE" : "মানুষ",
  "CANCEL_ONGOING_SEARCH" : "আপনি কি নিশ্চিত যে আপনি চলমান অনুসন্ধান বাতিল করে চালিয়ে যেতে চান?",
  "SEARCH_AGAIN_WITH_A_TIP" : "আবার একটি টিপ দিয়ে অনুসন্ধান করবেন?",
  "TRY_AGAIN_WITH_A_TIP" : "একটি টিপ দিয়ে আবার চেষ্টা করুন?",
  "BOOST_YOUR_RIDE_CHANCES_AND_HELP_DRIVERS_WITH_TIPS" : "টিপ যাত্রা পাওয়ার সুযোগ বাড়াতে সহায়তা করতে পারে। পিক আওয়ারের সময় ড্রাইভারকে সহায়তা করে / খালি রিটার্ন ভ্রমণের জন্য ক্ষতিপূরণ দেয়",
  "TRY_AGAIN_WITHOUT_TIP" : "টিপ ছাড়াই আবার চেষ্টা করুন",
  "SEARCH_AGAIN_WITHOUT_A_TIP" : "টিপ ছাড়াই আবার অনুসন্ধান করুন",
  "TRY_AGAIN_WITH" : "আবার চেষ্টা করুন",
  "SEARCH_AGAIN_WITH" : "সাথে আবার অনুসন্ধান করুন",
  "TIP" : "টিপ",
  "CUSTOMER_SELECTED_FARE" : "গ্রাহক টিপ#",
  "START_YOUR_CHAT_USING_THESE_QUICK_CHAT_SUGGESTIONS" : "এই দ্রুত চ্যাট পরামর্শগুলি ব্যবহার করে আপনার চ্যাট শুরু করুন" ,
  "MESSAGE" : "বার্তা",
  "START_YOUR_CHAT_WITH_THE_DRIVER" : "ড্রাইভারের সাথে আপনার চ্যাট শুরু করুন",
  "I_AM_ON_MY_WAY" : "আমি গন্তব্যের পথে",
  "GETTING_DELAYED_PLEASE_WAIT" : "বিলম্ব হচ্ছে, দয়া করে অপেক্ষা করুন",
  "UNREACHABLE_PLEASE_CALL_BACK" : "অ্যাক্সেসযোগ্য, দয়া করে ফিরে কল করুন",
  "ARE_YOU_STARING" : "আপনি কি শুরু করছেন?",
  "PLEASE_COME_SOON" : "দয়া করে শীঘ্রই আসুন",
  "OK_I_WILL_WAIT" : "আচ্ছা আমি অপেক্ষা করব",
  "I_HAVE_ARRIVED" : "আমি এসেছি",
  "PLEASE_COME_FAST_I_AM_WAITING" : "দয়া করে দ্রুত আসুন, আমি অপেক্ষা করছি",
  "PLEASE_WAIT_I_WILL_BE_THERE" : "দয়া করে অপেক্ষা করুন, আমি সেখানে থাকব",
  "LOOKING_FOR_YOU_AT_PICKUP" : "পিক-আপে আপনাকে খুঁজছেন",
  "MOBILE" : "মুঠোফোন",
  "HOW_DO_YOU_IDENTIFY_YOURSELF" : "আপনি নিজেকে কীভাবে চিহ্নিত করবেন?",
  "SELECT_YOUR_GENDER" : "আপনার লিঙ্গ নির্বাচন",
  "FEMALE" : "মহিলা",
  "MALE" : "পুরুষ",
  "PREFER_NOT_TO_SAY" : "বলতে না পছন্দ",
  "EMAIL_ID" : "ইমেইল আইডি",
  "SET_NOW" : "এখনই সেট করুন",
  "ADD_NOW" : "এখন যোগ করুন",
  "HOW_SHOULD_WE_ADDRESS_YOU" : "আমাদের কীভাবে আপনাকে সম্বোধন করা উচিত?",
  "GENDER_STR" : "লিঙ্গ",
  "PROFILE_COMPLETION" : "প্রোফাইল সমাপ্তি",
  "EARLY_END_RIDE_CHARGES" : "প্রারম্ভিক রাইড শেষ চার্জ^",
  "EARLY_END_RIDE_CHARGES_DESCRIPTION" : "Reard যাত্রা শেষে প্রথম দিকে অবরুদ্ধ দূরত্বের অর্ধেক ভাড়ার পরিমাণের অতিরিক্ত চার্জ দেয় (সর্বোচ্চ ₹ 50)",
  "YES_TRY_AGAIN" : "হ্যাঁ, আবার চেষ্টা করুন",
  "NO_DONT" : "না, না",
  "YES_CANCEL_SEARCH" : "হ্যাঁ, অনুসন্ধান বাতিল করুন",
  "TRY_LOOKING_FOR_RIDES_AGAIN" : "এটি খুব ব্যস্ত দিন বলে মনে হচ্ছে। আপনি আবার রাইড খুঁজছেন চেষ্টা করতে পারেন",
  "NO_TIP" : "কোন টিপ নেই",
  "CUSTOMER_TIP_DESCRIPTION" : "#যাত্রা পাওয়ার সম্ভাবনা বাড়ানোর জন্য গ্রাহক কর্তৃক অতিরিক্ত পরিমাণ যুক্ত করা হয়েছে।",
  "PLACE_CALL" : "একটি কল করুন",
  "REQUEST_CALLBACK" : "কলব্যাকের অনুরোধ করুন",
  "DIRECT_CALL" : "সরাসরি কল",
  "ANONYMOUS_CALL" : "বেনামী কল",
  "YOUR_NUMBER_WILL_NOT_BE_SHOWN_TO_THE_DRIVER" : "আপনার নম্বর ড্রাইভারকে দেখানো হবে না",
  "YOUR_NUMBER_WILL_BE_VISIBLE_TO_THE_DRIVER_USE_IF_NOT_CALLING_FROM_REGISTERED_NUMBER" : "আপনার নম্বরটি ড্রাইভারের কাছে দৃশ্যমান হবে। নিবন্ধিত নম্বর থেকে কল না করলে ব্যবহার করুন",
  "CALL_DRIVER_USING" : "ব্যবহার করে ড্রাইভারকে কল করুন:",
  "WAS_YOUR_CALL_SUCCESSFUL" : "আপনার কল সফল ছিল" ,
  "NAVIGATE_TO_PICKUP" : "পিকআপে নেভিগেট করুন"
}