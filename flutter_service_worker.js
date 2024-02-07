'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "848289c526c7b3f7dd156cdf9573ff1b",
"index.html": "5bc48d565cddfbdf46b1049ec669a083",
"/": "5bc48d565cddfbdf46b1049ec669a083",
"firebase-messaging-sw.js": "32f827c54327e28d9cbeba4806e70a96",
"main.dart.js": "4821f917d52f9c681c6ff94a53e3c942",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "7f9801cb8a190e5a039d83e562d89baf",
"icons/favicon.ico": "d93f71529ec3e3ff12643fd7672fef9a",
"icons/Icon-192.png": "c56c7d562739bc4c28da829e81c797a0",
"icons/Icon-maskable-192.png": "c56c7d562739bc4c28da829e81c797a0",
"icons/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"icons/Icon-maskable-512.png": "3abc8ad86f9c794beb8a593542d1bc5e",
"icons/Icon-512.png": "3abc8ad86f9c794beb8a593542d1bc5e",
"manifest.json": "7857f55ab2e73b0eee4a006aebdeda10",
"assets/AssetManifest.json": "8b6c5965424bc7405c2926be283e51e4",
"assets/NOTICES": "d6d0b0dc8b938d4b2f28320988b3b930",
"assets/FontManifest.json": "c83e103b06d0d7b23267004e997a1cab",
"assets/packages/flutter_google_places_web/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_google_places_web/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/google_places_flutter/images/location.json": "afa33acf2c340246c901718f4efdfccf",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/scooter.json": "b3dc0fb7f5cb68d67fba6456ef8e2c6e",
"assets/assets/ic_location_marker.png": "746d220d32c6ace966c8e7f5931251ef",
"assets/assets/images/svg/Contact.svg": "f938ef4bfb8eefdc61ef3560f4d46c88",
"assets/assets/images/svg/My%2520Orders.svg": "42de8df736973f1757109301c9258585",
"assets/assets/images/svg/Cart-filled.svg": "8c067a4977c0b19bc686be8d99821ec3",
"assets/assets/images/svg/Home.svg": "8cb03f1fcc22ce82404ac68ce8ebeb3a",
"assets/assets/images/svg/Visa.svg": "19a67e9dc1938e5c5ca52d9f2b96ef92",
"assets/assets/images/svg/Logout.svg": "78ed891f2c1a78c7abcb9fcb0b8b7a57",
"assets/assets/images/svg/Master.svg": "3f4847db8b40a46e58088276418d171a",
"assets/assets/images/svg/Right_Arrow.svg": "a5ba97a1cfd2c48f719ca18afc34720f",
"assets/assets/images/svg/Privacy%2520policy.svg": "245f112134f2c483e1433f17037b36a3",
"assets/assets/images/svg/settings.svg": "8fb86ce33d5aa01457c5f0a3b6e838d2",
"assets/assets/images/svg/Cart.svg": "9f026bd57484a690c33782702a72dd9e",
"assets/assets/images/svg/Discover.svg": "ee94ef4b3f36d5f011a8d63130cbbcf9",
"assets/assets/images/svg/Tick.svg": "b8eb30ed4ec125c1d851ef709766f710",
"assets/assets/images/svg/Work.svg": "f490447b183b2ccf34ce64c526d23e22",
"assets/assets/images/svg/Plus.svg": "ce566edc76dc76ebccbd99a21ba19852",
"assets/assets/images/svg/location_pin_golden.svg": "401ddfa4de7b104356ac9f6c07edc37a",
"assets/assets/images/svg/Orders-filled.svg": "e228003e14403110467cc55bba95c3c0",
"assets/assets/images/svg/Address%2520Book.svg": "a5dc91ed51369a747518a7f12e4e65be",
"assets/assets/images/svg/Home-filed.svg": "041afe8037a3bb03f485b42e372373e6",
"assets/assets/images/svg/Orders.svg": "9ac083948062b36781c23f06d923a626",
"assets/assets/images/svg/American_Express.svg": "1ece2f2e9a4d252d3097857494e2c397",
"assets/assets/images/svg/untick.svg": "8ed998207ceffe42125a2f8bb2310f77",
"assets/assets/images/svg/Terms%2520&%2520Conditions.svg": "e0ad6844d6c47615ef0858b2fbf597a6",
"assets/assets/images/svg/camera.svg": "7edb2f8006d8dedeb66478a0c71aebe6",
"assets/assets/images/svg/edit.svg": "34571756e37a196318873576e14eb85e",
"assets/assets/images/svg/FAQ.svg": "16460dcba57baff95f5f43b7a99ac9b9",
"assets/assets/images/svg/app_logo.svg": "7cb596486a2cb0eb64f1a8abde68401a",
"assets/assets/images/svg/Location.svg": "0033bfc3a100a5a184ea0ef9e2af0c74",
"assets/assets/images/svg/settings-filled.svg": "6dc9d94fbb898eefc524147a0542140a",
"assets/assets/images/svg/Dropdown.svg": "28f10b7f02a45b08adc5dedc80411483",
"assets/assets/images/svg/home-bottom.svg": "9fd620be38ca8f95344a49cc50f6a1e0",
"assets/assets/images/svg/Profile.svg": "14e5d657cb1f520ed5f50b05c14de6ba",
"assets/assets/images/svg/Calendar.svg": "e321325c2ffc3238b55d3b2b17dfccd6",
"assets/assets/images/svg/Minus.svg": "18c6f62fda260a5cbfa4c5e5776055da",
"assets/assets/images/svg/Payment%2520Details.svg": "73d8ae0e64286cee1edb914034d58ba2",
"assets/assets/images/ic_visa.png": "4778725be9717354225903e1e3bcb25c",
"assets/assets/images/ic_referal_code.png": "b1cef380ac120d61c15a6ee6018d029c",
"assets/assets/images/ic_union.png": "8f73cb20e136f00ec4e41c26ad1c1ed4",
"assets/assets/images/ic_unchecked_radio.png": "8b25766e18d95799880f97bc51769dad",
"assets/assets/images/ic_orders.png": "b369c65cddd63aad7082b9e45af1e14c",
"assets/assets/images/ic_elo.png": "97c036b399413a324d31039cd02464c1",
"assets/assets/images/delete_account.png": "d6747fb0c9a806408e12e53e9801d6d0",
"assets/assets/images/bg_eat.png": "b1aabc2f89dc2795f8cadc9a31c4a580",
"assets/assets/images/ic_store_rating.png": "b3ef1ad32285695518ead2057d012efd",
"assets/assets/images/ic_down_arrow.png": "97b86e8fec6c410511262f69759c4baf",
"assets/assets/images/ic_delivery_map.png": "fde4686c094d865f90153ef05f0b943d",
"assets/assets/images/ic_delivery_calender.png": "d2f4d0aee91641fa20277bda6af71bbc",
"assets/assets/images/ic_contact_email.png": "910895932be0c48095ba32c7b0e338e5",
"assets/assets/images/ic_delivery_upload.png": "1a658873516d79fafaaf8c8271ec048b",
"assets/assets/images/ic_half_updated.png": "319ad98fb837a6ea47bef2e26d4eb227",
"assets/assets/images/ic_close.png": "7977cc9cb62f35fd58a4602fdaa0eae5",
"assets/assets/images/ic_drinks.png": "eab8458be1f18d24eccb11a21b81a60b",
"assets/assets/images/ic_home.png": "a82f757b00e90ed000181246ebe1a68d",
"assets/assets/images/ic_location.png": "a0c2f123ff3e1ae678d751386455e434",
"assets/assets/images/ic_camera.png": "56c8a66120c219b9e348c212f55a3835",
"assets/assets/images/2.0x/ic_referal_code.png": "b7bb9653e65e4d406e34f79cfc8638f8",
"assets/assets/images/2.0x/ic_union.png": "633b3801f6931b7c90a77da40def079d",
"assets/assets/images/2.0x/ic_unchecked_radio.png": "ef130a42e7ba923356d64a300c34e44f",
"assets/assets/images/2.0x/ic_orders.png": "6a95e8cd9184898bf53ab122c1855680",
"assets/assets/images/2.0x/ic_elo.png": "7824055342d3efa2b6d42283d1601461",
"assets/assets/images/2.0x/delete_account.png": "cc6ff21d5c9cbe909c6086337032f4d8",
"assets/assets/images/2.0x/bg_eat.png": "a8e2a7cc5e8b2cc93fdf649c1627bf3d",
"assets/assets/images/2.0x/ic_store_rating.png": "6029a936c18e2ecbe5a2f3d8918f26bd",
"assets/assets/images/2.0x/ic_down_arrow.png": "24cb117e0e4de6455f845e310471e116",
"assets/assets/images/2.0x/ic_delivery_map.png": "678768849e85f5def257d8522195d61c",
"assets/assets/images/2.0x/ic_delivery_calender.png": "8a16cc385b2c778b8a46bbf750c92765",
"assets/assets/images/2.0x/ic_contact_email.png": "3ce79e581cd503ddb5e46234e836b7d8",
"assets/assets/images/2.0x/ic_delivery_upload.png": "6dccf7bc32863d7eca62ef9246440045",
"assets/assets/images/2.0x/ic_half_updated.png": "65ba9c283d1e5bffa78b238d113cd2aa",
"assets/assets/images/2.0x/ic_close.png": "d210a81f861c050b549acc840a05c0ed",
"assets/assets/images/2.0x/ic_drinks.png": "ed0fd5e3bd983d78e8361aabfcccce03",
"assets/assets/images/2.0x/ic_home.png": "63cb69101bb04956e964f9102276f285",
"assets/assets/images/2.0x/ic_location.png": "bbdfa7e1825592e66fa92f6ce703d7da",
"assets/assets/images/2.0x/ic_camera.png": "0a9aedf1371bca99328662ecb406d7b9",
"assets/assets/images/2.0x/ic_restaurant.png": "6d58bb36e7b8898204fc335dde98cec0",
"assets/assets/images/2.0x/road.png": "60d3e48b013fb0e9554d145e53637559",
"assets/assets/images/2.0x/ic_tick.png": "3776462e4fd9833561f5de65bbd630d1",
"assets/assets/images/2.0x/ic_add.png": "5247c133535ca694e2a2d816e0ea7db3",
"assets/assets/images/2.0x/ic_cards.png": "3b71816a865af3d9e401607e13200391",
"assets/assets/images/2.0x/ic_grocery.png": "07525b29589dcf2a89ddde96531c1bf6",
"assets/assets/images/2.0x/ic_minus.png": "980f09d6d81a423477ffd4cd64b4d14b",
"assets/assets/images/2.0x/ic_home_delivery.png": "9f7548b9912d2a32040b01037eaed08c",
"assets/assets/images/2.0x/ic_front_store.png": "2cbde3114e403a8f919a3428788582a4",
"assets/assets/images/2.0x/ic_selected_settings.png": "1288b5992d340713aee2093d135924dc",
"assets/assets/images/2.0x/ic_right_arrow.png": "b7d50f643a265600a19cb70c79b1475f",
"assets/assets/images/2.0x/ic_privacy.png": "83c35e4fda21ab5f10bbb70b41181abd",
"assets/assets/images/2.0x/ic_copy_code.png": "2c6d39066ecbac9a11fbd938d98b4a18",
"assets/assets/images/2.0x/ic_gps.png": "69b58562b02491bfb7105359c0a11b72",
"assets/assets/images/2.0x/ic_cross.png": "88a64eac8d8b3baa074464d81c1a7ad1",
"assets/assets/images/2.0x/ic_reorder.png": "9518d1a62aa2f67e815635309bab7c42",
"assets/assets/images/2.0x/ic_cart.png": "d554ca8b5d00ecb64c1c35afdeacec7b",
"assets/assets/images/2.0x/ic_share.png": "c772f8a1dca99ec7b7af5ffe7605cb92",
"assets/assets/images/2.0x/ic_clock.png": "11ef6fd456d1f398cc582c7bedd01a1d",
"assets/assets/images/2.0x/ic_unchecked_box.png": "955b70df5e3dfaa014dee858cac07aa3",
"assets/assets/images/2.0x/ic_checked_radio.png": "83edfae1093850ef29a2de2584000ca4",
"assets/assets/images/2.0x/bg_drinks.png": "2d75df457ff170fc07630a1e2bdc6454",
"assets/assets/images/2.0x/ic_faq.png": "ab0cabfff4439bb108e5ba510bc0b3cb",
"assets/assets/images/2.0x/ic_logout.png": "8a0c908bd1df5d0855ae22eb64212809",
"assets/assets/images/2.0x/ic_address_book.png": "5f4e0054f8664d1f6f58372e97790801",
"assets/assets/images/2.0x/ic_jcb.png": "2ec7d21f7af73a50be493e8b495cc489",
"assets/assets/images/2.0x/ic_stock.png": "054d9d2415df665ac643baf37182ae8e",
"assets/assets/images/2.0x/settings_new.png": "2b6004090fb9aaaf57aa9d8ce2c3aab3",
"assets/assets/images/2.0x/ic_maestro.png": "52c5a9e2a460d04adb011a5b10b05df2",
"assets/assets/images/2.0x/ic_star.png": "ae74d9a1d57f2529e1a2645871e19db1",
"assets/assets/images/2.0x/bg_delivery.png": "3a35c9d21b53445bbf67f99494eca2d7",
"assets/assets/images/2.0x/bg_grocery.png": "f5ae2354a4d733c3b3cda2049a67f200",
"assets/assets/images/2.0x/ic_american.png": "632782810f99112dfde2e4ec14d063ad",
"assets/assets/images/2.0x/ic_cash.png": "64d05888cd9fab117f2f3bd31b3af951",
"assets/assets/images/2.0x/ic_mir.png": "73d87f77ccf89c07f76729136bfd7b56",
"assets/assets/images/2.0x/logo.png": "a2efd5ff0a2b88149c591253e6584ca1",
"assets/assets/images/2.0x/ic_search.png": "111374530594d9c8e8656a0e8992faae",
"assets/assets/images/2.0x/ic_settings.png": "cde254a7f7e24c29c25c55ee20b37f54",
"assets/assets/images/2.0x/ic_contact.png": "fcbb55aba0f7b59c4233f4d3b695bc65",
"assets/assets/images/2.0x/ic_discover.png": "894a881ef625ff11543860a54d752dde",
"assets/assets/images/2.0x/ic_product_search.png": "ca7fc394961d1f98cfbd3a79d3293747",
"assets/assets/images/2.0x/ic_back.png": "0cccb6cfba51fcc907294efd980ced3d",
"assets/assets/images/2.0x/Profile.png": "f1fb10e047aaad72241db84a6e8d938a",
"assets/assets/images/2.0x/ic_half_side.png": "2adcdee7ff5949a646eeb04501e24f32",
"assets/assets/images/2.0x/ic_checked.png": "492e219d274df072adf79373d0dd6fab",
"assets/assets/images/2.0x/ic_cart_clock.png": "c1ba03546d0919da4ee42a25f025cfec",
"assets/assets/images/2.0x/ic_back_coupon.png": "1eadc870c3f2707045bbab39660c9548",
"assets/assets/images/2.0x/ic_wallet.png": "99f1d365f4a5736479a71cccf6965c2d",
"assets/assets/images/2.0x/ic_cart_location.png": "5f4e0054f8664d1f6f58372e97790801",
"assets/assets/images/2.0x/car_marker.png": "e2fc8c5c9dcb089ac0192730c84ad5de",
"assets/assets/images/2.0x/ic_delivery.png": "17d269202aff4cfd17a03840fe88885b",
"assets/assets/images/2.0x/driver_scooter.png": "612f3b525f7bd47c2070f49284e79312",
"assets/assets/images/2.0x/ic_selected_cart.png": "1c3f7698f7148e27bf6b22c75d554b34",
"assets/assets/images/2.0x/home_selected.png": "e7327afa3afa2a685a20ae8879de5e17",
"assets/assets/images/2.0x/ic_drop_down.png": "db2a7ed0610af68a775fece5c0148a4b",
"assets/assets/images/2.0x/ic_search_selected.png": "da10d79936da482888f69878ff0969db",
"assets/assets/images/2.0x/ic_call.png": "31d502d1b09774be8fd106b8aac923b9",
"assets/assets/images/2.0x/ic_offer.png": "7b5031ed2bf2ec413473041c4452535c",
"assets/assets/images/2.0x/ic_diners.png": "1673d31560669ce143a8458af23432b7",
"assets/assets/images/2.0x/ic_hipercard.png": "1e543c07c12df129676561c129635be7",
"assets/assets/images/2.0x/ic_copy_referal.png": "cfbb7ac46ca68f474ae3f1c09e29084d",
"assets/assets/images/2.0x/ic_contact_call.png": "417f5e64b5bc32d836995d5b826d01f0",
"assets/assets/images/2.0x/ic_terms.png": "d01b333226900b3d45f69feeb6216824",
"assets/assets/images/2.0x/ic_delivery_clock.png": "d6c2933a0136172e8f6321d86a04edcc",
"assets/assets/images/2.0x/ic_offer_percentage.png": "7d5b02e6fcaf4b8ab509b9d05042af5f",
"assets/assets/images/2.0x/ic_instructions.png": "bb5185af981e890e95bf5db21778f563",
"assets/assets/images/2.0x/ic_eat.png": "ad9b9538e0a821f02259337581b52eaa",
"assets/assets/images/2.0x/ic_mastercard.png": "802be758ac10bb4a9a4dcb60b966a9f6",
"assets/assets/images/ic_restaurant.png": "f07e3129ef498b78021ab7ada19887fe",
"assets/assets/images/road.png": "d1aa0d8fba7350bb273f781fb5ed5a55",
"assets/assets/images/ic_tick.png": "59ca1833ae7be71a47aecc3aacdcc2e6",
"assets/assets/images/ic_add.png": "762b9b9ce6f7cd2715e1defd7544935a",
"assets/assets/images/ic_cards.png": "f92f45dc94578f66007c0e3eaf6a1d51",
"assets/assets/images/ic_grocery.png": "f029a897dd65ff79edb5b6a68f53232a",
"assets/assets/images/ic_minus.png": "d14480ffd7b1ed9d2af2a72bc3bca57d",
"assets/assets/images/ic_home_delivery.png": "0b76a34076008bea94fe5c4b8e4d9a46",
"assets/assets/images/ic_front_store.png": "7657e6d2a3c82ca5fd9e572c61f05fa5",
"assets/assets/images/ic_selected_settings.png": "c1820058cfd2f7663afed073db3265e9",
"assets/assets/images/ic_right_arrow.png": "a9ffc87df3f931d64d4b4703d365f6d3",
"assets/assets/images/ic_privacy.png": "36205654f8be3c12efc880322021858e",
"assets/assets/images/ic_copy_code.png": "4076bae7ed2a0fbbd0054380ec4fa6cc",
"assets/assets/images/ic_gps.png": "fb8fffe08dcaf1ed765722f716077119",
"assets/assets/images/ic_cross.png": "87da1ac6d725fe6e09c9a2e0d761a1a9",
"assets/assets/images/ic_reorder.png": "8798e6283d81bea32f0aeda232850ef0",
"assets/assets/images/3.0x/ic_referal_code.png": "c14a99ee238317318e34aea921f635a4",
"assets/assets/images/3.0x/ic_union.png": "ab8d14ca03826fe459d29fe5aadebd49",
"assets/assets/images/3.0x/ic_unchecked_radio.png": "d333212974877fc694b77e4cab1621ed",
"assets/assets/images/3.0x/ic_orders.png": "cde07e8cd0badb647a95b5e501eef35a",
"assets/assets/images/3.0x/ic_elo.png": "a8f45180a2a6a7df4d1e87c28c24212e",
"assets/assets/images/3.0x/delete_account.png": "16f02472795cfd4fb8db67184deea554",
"assets/assets/images/3.0x/bg_eat.png": "b550892a8b2217c33105d92c192c7f89",
"assets/assets/images/3.0x/ic_store_rating.png": "6ce0a8fd267872245795e151654e90c0",
"assets/assets/images/3.0x/ic_down_arrow.png": "e3a0bbce1d6f1730a378eb71c8b1d313",
"assets/assets/images/3.0x/ic_delivery_map.png": "da8fa2b2b406d054b5122c3055fae916",
"assets/assets/images/3.0x/ic_delivery_calender.png": "f112e8fe86be27a1e7ed6c35c456389a",
"assets/assets/images/3.0x/ic_contact_email.png": "2a3e0b48660e993fbcd3ddbc85bcc3be",
"assets/assets/images/3.0x/ic_delivery_upload.png": "52ef6482213a168c5fb15ee60fe19a14",
"assets/assets/images/3.0x/ic_half_updated.png": "624b690d89412a4de3fb8fbd004f3da0",
"assets/assets/images/3.0x/ic_close.png": "80e497479226c9cf3ee5c9e53736a8c3",
"assets/assets/images/3.0x/ic_drinks.png": "1b56fe59fed9bab9880c0e3d5603a63d",
"assets/assets/images/3.0x/ic_home.png": "048ece9e5d43bed8ddfdb1b931a3d021",
"assets/assets/images/3.0x/ic_location.png": "f692c29b84281cbc60e0c3fe65b4d6b0",
"assets/assets/images/3.0x/ic_camera.png": "b4b07a85f2d074afe3a364709567691e",
"assets/assets/images/3.0x/ic_restaurant.png": "bc4d89e11dc3c56d5dc7287731d9a340",
"assets/assets/images/3.0x/road.png": "07f020c17204b89f09d2f0ee2178deba",
"assets/assets/images/3.0x/ic_add.png": "a52fb1bbea9209e8f2886d3b32909196",
"assets/assets/images/3.0x/ic_cards.png": "940e29b5cf55ce71a99c09e852b8a235",
"assets/assets/images/3.0x/ic_grocery.png": "d79d630a440b5707230a4f8fa217e168",
"assets/assets/images/3.0x/ic_minus.png": "892a69f029b800d98ed700cb3fed6e2f",
"assets/assets/images/3.0x/ic_home_delivery.png": "58c3f8cefc98d36a4d1ce1e785a756ed",
"assets/assets/images/3.0x/ic_front_store.png": "20fbbeacd434f191b89f9f1c19ccddad",
"assets/assets/images/3.0x/ic_selected_settings.png": "dfe453bb402ba2ba38bdc0d235a3b7b4",
"assets/assets/images/3.0x/ic_right_arrow.png": "28f50d9202ef38411e8e2142585313f7",
"assets/assets/images/3.0x/ic_privacy.png": "d62e2781b32fbdcfd729e1a1c9833c80",
"assets/assets/images/3.0x/ic_copy_code.png": "21aa5b375d29b6e8d851f0f4d0bb21ee",
"assets/assets/images/3.0x/ic_gps.png": "49a240a096794ef02edb25e2c2da527b",
"assets/assets/images/3.0x/ic_cross.png": "407f7e477301f86c0a66ef23e39cf90a",
"assets/assets/images/3.0x/ic_reorder.png": "97386e5367c5d5fa08ec732eb41054c6",
"assets/assets/images/3.0x/ic_cart.png": "f94d846ec62cfd0c7763074fcefe9421",
"assets/assets/images/3.0x/ic_share.png": "e076f774cdbe1845e7e31f2af98d53bf",
"assets/assets/images/3.0x/ic_clock.png": "95cb12c5f85b3e43894347264a9a01e2",
"assets/assets/images/3.0x/ic_unchecked_box.png": "fadf1c5dd6d6a0fe2fd01ade53daab77",
"assets/assets/images/3.0x/ic_checked_radio.png": "55a1c26bba67077934741de2d1f26fb1",
"assets/assets/images/3.0x/bg_drinks.png": "086784886790e12aaf27104c9bcf336f",
"assets/assets/images/3.0x/ic_faq.png": "2fefc1d362d7072508b2748f0ec76928",
"assets/assets/images/3.0x/ic_logout.png": "b22bcdb067d35df7ea77e46c9a99b99b",
"assets/assets/images/3.0x/ic_address_book.png": "9c427c9882ef2d31d22136927164df53",
"assets/assets/images/3.0x/ic_jcb.png": "b17cd6c1956283cd3b532e2b1c3f2324",
"assets/assets/images/3.0x/ic_stock.png": "3402faed37d41a0f9db043e70ed8e2a1",
"assets/assets/images/3.0x/settings_new.png": "181fd3d16a72f458ad6c93937bfb53b2",
"assets/assets/images/3.0x/ic_maestro.png": "48d959a01aaaa3f371cb396d9193c7cf",
"assets/assets/images/3.0x/ic_star.png": "bf730d42a5b442374d69f223ab06e1ac",
"assets/assets/images/3.0x/bg_delivery.png": "31a991cf8b06de744ca572d1959ddef4",
"assets/assets/images/3.0x/bg_grocery.png": "c6b5a20474dea5580859456ad7211fc6",
"assets/assets/images/3.0x/ic_american.png": "d94f803198c52a35c308c5f20b43b191",
"assets/assets/images/3.0x/ic_cash.png": "6de681400777a1cfe542155f3c60b9c4",
"assets/assets/images/3.0x/ic_mir.png": "7e12cf1e903db5dcc8c625bd22a456ee",
"assets/assets/images/3.0x/logo.png": "7a1ad0024fe7473b25d4a7beb2117026",
"assets/assets/images/3.0x/ic_search.png": "1656cf10248a81494b8d387b05fb3ac7",
"assets/assets/images/3.0x/ic_settings.png": "7d0ecb6d5b95c4b27860338219bb6a68",
"assets/assets/images/3.0x/ic_contact.png": "5ef11b3d01b722036b3f1d0c52b718ae",
"assets/assets/images/3.0x/ic_discover.png": "86dadb9cc3e2b3cd9f0e1ac860c5f72d",
"assets/assets/images/3.0x/ic_product_search.png": "c98c5b100e7bcd2b1d246e4f17d35ad5",
"assets/assets/images/3.0x/ic_back.png": "cc83b51b9f2a10555c83f999ef3b9813",
"assets/assets/images/3.0x/Profile.png": "81e08cade316bae6cf2ccc34379b9e9b",
"assets/assets/images/3.0x/ic_half_side.png": "51aa46116d35e9b5d2a258e2fd3a6a97",
"assets/assets/images/3.0x/ic_checked.png": "2e74e9f174892509bfb70f197d3627b1",
"assets/assets/images/3.0x/ic_cart_clock.png": "fd8116e6051ff8718d16fb9c752c437e",
"assets/assets/images/3.0x/ic_back_coupon.png": "394bea4c9269346ed4b3428a19684978",
"assets/assets/images/3.0x/ic_wallet.png": "23b29d6a0a9f4e67c1331ffe0df06ffa",
"assets/assets/images/3.0x/ic_cart_location.png": "9c427c9882ef2d31d22136927164df53",
"assets/assets/images/3.0x/car_marker.png": "b5d0846bc8d686a3fe7988e3dde6ca9a",
"assets/assets/images/3.0x/ic_delivery.png": "5a121f1c63589c059c57f357a225489d",
"assets/assets/images/3.0x/driver_scooter.png": "0221b542f197c42b3b2d6173316bc914",
"assets/assets/images/3.0x/ic_selected_cart.png": "e0e44820f8e0b2acca5a9f0c3ffc57a5",
"assets/assets/images/3.0x/home_selected.png": "d0ca985d0381449f52d7a370ab92b13b",
"assets/assets/images/3.0x/ic_drop_down.png": "6e34e57e48d41c6d410de6b484a77a42",
"assets/assets/images/3.0x/ic_search_selected.png": "aaf45cb1056b1a3cf8638043c583d307",
"assets/assets/images/3.0x/ic_call.png": "c30956c5e32bc5d9a2d00dcab409bf2c",
"assets/assets/images/3.0x/ic_offer.png": "3d476c565bc999e2b0d7376c1c8acbdf",
"assets/assets/images/3.0x/ic_diners.png": "2046f1d7d69d9f779f6b9630c68a1e69",
"assets/assets/images/3.0x/ic_hipercard.png": "803f866ec03629ee0c024b8084bbfade",
"assets/assets/images/3.0x/ic_copy_referal.png": "1f2bf478ce5d0906cfc149b608f325e0",
"assets/assets/images/3.0x/ic_contact_call.png": "b77d3a542260631e13b7ed4b33527916",
"assets/assets/images/3.0x/ic_terms.png": "b0e5a822ea958d83ac9a05df523c1a40",
"assets/assets/images/3.0x/ic_delivery_clock.png": "3462e8dd544bca7b500d45e89493aaa7",
"assets/assets/images/3.0x/ic_offer_percentage.png": "24f89b4e2f3fde8df03678f4fe6c69c8",
"assets/assets/images/3.0x/ic_instructions.png": "9fb23dcf616a4569a8a60dd964e872b6",
"assets/assets/images/3.0x/ic_eat.png": "2f97757285485feb498996073f0d9e7b",
"assets/assets/images/3.0x/ic_mastercard.png": "26443aac381f676d3ed41850f491266c",
"assets/assets/images/ic_cart.png": "87300b5241ac22a6d41a4c7657f33bff",
"assets/assets/images/ic_share.png": "da5c5a07e0d6c1d287f1056c168b87c5",
"assets/assets/images/ic_clock.png": "e66c68e4af430696a0b0abf3ecd70c87",
"assets/assets/images/ic_unchecked_box.png": "0e50209cca0d75eefd5c5ac83992ae92",
"assets/assets/images/ic_checked_radio.png": "bb4073326d829c337c64a35809b11ac7",
"assets/assets/images/bg_drinks.png": "f49f2152f51243755437befcce2dd852",
"assets/assets/images/ic_faq.png": "24086a4f71f4a6ed9a54ce3586755172",
"assets/assets/images/ic_logout.png": "8a0c908bd1df5d0855ae22eb64212809",
"assets/assets/images/ic_address_book.png": "12aae98958316ed60ac55410a186178f",
"assets/assets/images/ic_jcb.png": "121ecc5e4e1379637af35fb5ac133f45",
"assets/assets/images/ic_stock.png": "a2e9329a81c8c60c77f82055b7229980",
"assets/assets/images/settings_new.png": "d594241cc4a97b1e7b3335eac3c9a853",
"assets/assets/images/ic_maestro.png": "7613dbae263a9f3a17de70b6ad1856dd",
"assets/assets/images/building.png": "5f081b3f59a63a9c7b01ff6e7e054c7d",
"assets/assets/images/ic_star.png": "3640859ab86163959fdccdc2bf72ec5b",
"assets/assets/images/bg_delivery.png": "065a701ce3f19c63525466b830cef853",
"assets/assets/images/bg_grocery.png": "aadce38e82483c5f8cf3a401f83f4df9",
"assets/assets/images/ic_american.png": "9158383b895ea7ed915f399b7a88ca64",
"assets/assets/images/ic_cash.png": "2e15b66b7369d73ff0d282fb51cee61b",
"assets/assets/images/ic_mir.png": "c3bbda0085e85025307f6f6a378ea3ce",
"assets/assets/images/logo.png": "9ddecede86b6b4e15bcf3cd5a6fa102d",
"assets/assets/images/ic_search.png": "af405728a65099dff0afcd0e567658ed",
"assets/assets/images/ic_settings.png": "acc03fa7f8a5255f5977e494abba6165",
"assets/assets/images/ic_contact.png": "1255f8250c317d07ade5316948dc5efc",
"assets/assets/images/ic_discover.png": "2637231728a4833b6fb4b9ad17b23785",
"assets/assets/images/ic_product_search.png": "905cdaffa1a088609e201fde04c6fce7",
"assets/assets/images/ic_back.png": "8e7e471a500af40739874ddcbdaa849e",
"assets/assets/images/Profile.png": "41e0dd5c40bbcabfe2104c91a46a603e",
"assets/assets/images/ic_half_side.png": "42b23d2305465999a54b7a442c4ef555",
"assets/assets/images/ic_checked.png": "efca4ece3c23edd285a3f1892c0621c6",
"assets/assets/images/ic_cart_clock.png": "014cfc56f5204eff410f69c52e566560",
"assets/assets/images/ic_back_coupon.png": "8e98249ed62bb08c889caa2d46324f44",
"assets/assets/images/ic_wallet.png": "5b4cdd4bc32d233b63e994c493b3ec7f",
"assets/assets/images/ic_cart_location.png": "12aae98958316ed60ac55410a186178f",
"assets/assets/images/car_marker.png": "ad59283e8dbc4fb70fdcbf1c9268b669",
"assets/assets/images/ic_delivery.png": "a8f643f7742c289131554b6b6b79cd9b",
"assets/assets/images/driver_scooter.png": "c2139d9f15790997c93d711b3d4d39a0",
"assets/assets/images/ic_selected_cart.png": "5cc1c9779715206a02ebe362da7a8ca1",
"assets/assets/images/home_selected.png": "46db54d4ce37f841b6471742b6ed994a",
"assets/assets/images/ic_drop_down.png": "313359ab61638b37e9d7d3d04fc8102f",
"assets/assets/images/ic_search_selected.png": "9b4fc2992d45e359a1814cef05a923f0",
"assets/assets/images/ic_call.png": "02092525b254d21538540b2cf1d7dc00",
"assets/assets/images/ic_offer.png": "c627c711c7319881763836b59420da7d",
"assets/assets/images/ic_diners.png": "3de9830d452b3455d43a1cc556edf28f",
"assets/assets/images/ic_hipercard.png": "8b47b913a788dfc54d2fc0a230f2ab84",
"assets/assets/images/ic_copy_referal.png": "01ab66918482c749df1ecdc64516fe80",
"assets/assets/images/ic_contact_call.png": "7eef5e3dd83c9a654dbaf8f8801994d4",
"assets/assets/images/ic_terms.png": "8a85e5615628d9c81073468ca3d23069",
"assets/assets/images/image.png": "7189816ca25e67e4ccb0f58410b439d6",
"assets/assets/images/ic_delivery_clock.png": "d8610d93fb70a6b2843f3aba11c92eaa",
"assets/assets/images/ic_offer_percentage.png": "995e94af808d3c88f2cf2ef09c123bda",
"assets/assets/images/ic_instructions.png": "93a2f321eeade7bd48dfe6a5be8f55d7",
"assets/assets/images/ic_eat.png": "d20a5fd4c82b2e4663bb1059a9dfd436",
"assets/assets/images/ic_mastercard.png": "2a899cf8776c0c31e293916607292474",
"assets/assets/countrycodes.json": "8931bf63dbb68e4fba449eb320593ca3",
"assets/assets/map_style/map_style.json": "d31ff484196bcebece61cd68a075d61a",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Nunito-ExtraBold.ttf": "438598eadc302471a495b3133620f621",
"assets/assets/fonts/Nunito-Regular.ttf": "d8de52e6c5df1a987ef6b9126a70cfcc",
"assets/assets/fonts/Nunito-SemiBold.ttf": "876701bc4fbf6166f07f152691b15159",
"assets/assets/fonts/Nunito-Bold.ttf": "c0844c990ecaaeb9f124758d38df4f3f",
"assets/assets/fonts/Nunito-Black.ttf": "529509f5501c7f45315210d280a456d4",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Nunito-ExtraLight.ttf": "4470502486a612e2bf6f38d5bff77ce8",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
