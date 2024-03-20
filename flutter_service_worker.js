'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f6260428621008c29844593f1b9880b9",
"index.html": "ab562a2912052ef07700d0581560b56a",
"/": "ab562a2912052ef07700d0581560b56a",
"firebase-messaging-sw.js": "c4cae52db024f7917cde63d98bc274ad",
"main.dart.js": "646f7e548b0f331a1154e91ab04e190e",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "090f8fbdd0663748a02baed3232f1c13",
"assets/AssetManifest.json": "46947ec8d0537c3e3727255b902a1c95",
"assets/NOTICES": "225bbee9f57e1b88e794e7603a4d54bf",
"assets/FontManifest.json": "c83e103b06d0d7b23267004e997a1cab",
"assets/packages/flutter_google_places_web/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_google_places_web/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/ic_location_marker.png": "746d220d32c6ace966c8e7f5931251ef",
"assets/assets/images/svg/Login_logo.svg": "64c6f29af27bdda17919c41ecd18c896",
"assets/assets/images/svg/Tick.svg": "b8eb30ed4ec125c1d851ef709766f710",
"assets/assets/images/svg/Orders.svg": "9ac083948062b36781c23f06d923a626",
"assets/assets/images/svg/untick.svg": "8ed998207ceffe42125a2f8bb2310f77",
"assets/assets/images/svg/app_logo.svg": "c945adacb894c078937b39a571d11e96",
"assets/assets/images/ic_visa.png": "4778725be9717354225903e1e3bcb25c",
"assets/assets/images/driver_marker_new.png": "774284c4eced81b330053a8c673b4266",
"assets/assets/images/ic_union.png": "8f73cb20e136f00ec4e41c26ad1c1ed4",
"assets/assets/images/ic_unchecked_radio.png": "8b25766e18d95799880f97bc51769dad",
"assets/assets/images/ic_elo.png": "97c036b399413a324d31039cd02464c1",
"assets/assets/images/delete_account.png": "d6747fb0c9a806408e12e53e9801d6d0",
"assets/assets/images/ic_contact_email.png": "910895932be0c48095ba32c7b0e338e5",
"assets/assets/images/ic_close.png": "7977cc9cb62f35fd58a4602fdaa0eae5",
"assets/assets/images/ic_location.png": "fb8fffe08dcaf1ed765722f716077119",
"assets/assets/images/ic_camera.png": "e546e325cd48a1c848ca08620285c978",
"assets/assets/images/ic_upload.png": "dd23ad9d0318f2c4a7a636535cc2fa33",
"assets/assets/images/ic_forward.png": "f0b07d8177829b734e10d5a1a5dd7d42",
"assets/assets/images/2.0x/driver_marker_new.png": "0ee8602416bf5355207caf6c72a66697",
"assets/assets/images/2.0x/ic_union.png": "633b3801f6931b7c90a77da40def079d",
"assets/assets/images/2.0x/ic_unchecked_radio.png": "ef130a42e7ba923356d64a300c34e44f",
"assets/assets/images/2.0x/ic_elo.png": "7824055342d3efa2b6d42283d1601461",
"assets/assets/images/2.0x/delete_account.png": "cc6ff21d5c9cbe909c6086337032f4d8",
"assets/assets/images/2.0x/ic_contact_email.png": "3ce79e581cd503ddb5e46234e836b7d8",
"assets/assets/images/2.0x/ic_close.png": "d210a81f861c050b549acc840a05c0ed",
"assets/assets/images/2.0x/ic_location.png": "69b58562b02491bfb7105359c0a11b72",
"assets/assets/images/2.0x/ic_camera.png": "e711ec4a7c15d280de2961ab866bfbd4",
"assets/assets/images/2.0x/ic_upload.png": "8c4142f1572edcc8b1005673a85fd9bd",
"assets/assets/images/2.0x/ic_forward.png": "51028bdbcba508d1f72edc2f321d2e5f",
"assets/assets/images/2.0x/ic_tick.png": "3776462e4fd9833561f5de65bbd630d1",
"assets/assets/images/2.0x/ic_privacy.png": "83c35e4fda21ab5f10bbb70b41181abd",
"assets/assets/images/2.0x/ic_card.png": "3b71816a865af3d9e401607e13200391",
"assets/assets/images/2.0x/ic_cross.png": "88a64eac8d8b3baa074464d81c1a7ad1",
"assets/assets/images/2.0x/ic_unchecked_box.png": "955b70df5e3dfaa014dee858cac07aa3",
"assets/assets/images/2.0x/ic_checked_radio.png": "83edfae1093850ef29a2de2584000ca4",
"assets/assets/images/2.0x/ic_document.png": "af525a7fc4ad62898ed9095bd80d202a",
"assets/assets/images/2.0x/ic_logout.png": "8a0c908bd1df5d0855ae22eb64212809",
"assets/assets/images/2.0x/ic_jcb.png": "2ec7d21f7af73a50be493e8b495cc489",
"assets/assets/images/2.0x/ic_inbox.png": "320405abf7b35b77279b9173a02769e7",
"assets/assets/images/2.0x/ic_maestro.png": "52c5a9e2a460d04adb011a5b10b05df2",
"assets/assets/images/2.0x/ic_mir.png": "73d87f77ccf89c07f76729136bfd7b56",
"assets/assets/images/2.0x/ic_bank_account.png": "c461b75ac2dbd6e509d03fbb5bcc5571",
"assets/assets/images/2.0x/Logo.png": "a2efd5ff0a2b88149c591253e6584ca1",
"assets/assets/images/2.0x/ic_payment.png": "7842913c28f05f96f7192498c4826048",
"assets/assets/images/2.0x/ic_settings.png": "d128fb17ef069679ad2452877ea9a035",
"assets/assets/images/2.0x/ic_contact.png": "fcbb55aba0f7b59c4233f4d3b695bc65",
"assets/assets/images/2.0x/ic_discover.png": "894a881ef625ff11543860a54d752dde",
"assets/assets/images/2.0x/ic_back.png": "1966f548deeff7b1e9566ffb25d08ecb",
"assets/assets/images/2.0x/ic_checked.png": "492e219d274df072adf79373d0dd6fab",
"assets/assets/images/2.0x/ic_calender.png": "a7bd389b3071ee1284060e3d43b48139",
"assets/assets/images/2.0x/car_marker.png": "e2fc8c5c9dcb089ac0192730c84ad5de",
"assets/assets/images/2.0x/driver_scooter.png": "9caac04a57a317fa0a3e5b71691ddfbf",
"assets/assets/images/2.0x/ic_navigation.png": "c25ebbb32aac1eb2024273200ab9236d",
"assets/assets/images/2.0x/ic_drop_down.png": "cd977efc0551239d97778c9e6e2b0fd7",
"assets/assets/images/2.0x/ic_location_green.png": "8cd83c0976e5729fad5ad2c326f41b8e",
"assets/assets/images/2.0x/ic_call.png": "31d502d1b09774be8fd106b8aac923b9",
"assets/assets/images/2.0x/ic_diners.png": "1673d31560669ce143a8458af23432b7",
"assets/assets/images/2.0x/ic_hipercard.png": "1e543c07c12df129676561c129635be7",
"assets/assets/images/2.0x/ic_contact_call.png": "417f5e64b5bc32d836995d5b826d01f0",
"assets/assets/images/2.0x/ic_terms.png": "d01b333226900b3d45f69feeb6216824",
"assets/assets/images/2.0x/ic_earnings.png": "bef9da7ebdd86c0c7396de823d661c2b",
"assets/assets/images/2.0x/ic_instructions.png": "bb5185af981e890e95bf5db21778f563",
"assets/assets/images/2.0x/ic_mastercard.png": "802be758ac10bb4a9a4dcb60b966a9f6",
"assets/assets/images/ic_tick.png": "59ca1833ae7be71a47aecc3aacdcc2e6",
"assets/assets/images/ic_privacy.png": "36205654f8be3c12efc880322021858e",
"assets/assets/images/ic_card.png": "f92f45dc94578f66007c0e3eaf6a1d51",
"assets/assets/images/ic_cross.png": "87da1ac6d725fe6e09c9a2e0d761a1a9",
"assets/assets/images/3.0x/driver_marker_new.png": "f245a6208ad748d3301c5b8e74aee8f3",
"assets/assets/images/3.0x/ic_union.png": "ab8d14ca03826fe459d29fe5aadebd49",
"assets/assets/images/3.0x/ic_unchecked_radio.png": "d333212974877fc694b77e4cab1621ed",
"assets/assets/images/3.0x/ic_elo.png": "a8f45180a2a6a7df4d1e87c28c24212e",
"assets/assets/images/3.0x/delete_account.png": "16f02472795cfd4fb8db67184deea554",
"assets/assets/images/3.0x/ic_contact_email.png": "2a3e0b48660e993fbcd3ddbc85bcc3be",
"assets/assets/images/3.0x/ic_close.png": "80e497479226c9cf3ee5c9e53736a8c3",
"assets/assets/images/3.0x/ic_location.png": "49a240a096794ef02edb25e2c2da527b",
"assets/assets/images/3.0x/ic_camera.png": "846195f126ed023e6103143e0ed6c6fb",
"assets/assets/images/3.0x/ic_upload.png": "35356a7ba8b4e5ba07e3a2ddb9c4216f",
"assets/assets/images/3.0x/ic_forward.png": "efbb5bafef8e1d977ed0fc4026dd4496",
"assets/assets/images/3.0x/ic_tick.png": "1823450c3a793db7344d46ddf5d11c98",
"assets/assets/images/3.0x/ic_privacy.png": "d62e2781b32fbdcfd729e1a1c9833c80",
"assets/assets/images/3.0x/ic_card.png": "940e29b5cf55ce71a99c09e852b8a235",
"assets/assets/images/3.0x/ic_cross.png": "407f7e477301f86c0a66ef23e39cf90a",
"assets/assets/images/3.0x/ic_unchecked_box.png": "fadf1c5dd6d6a0fe2fd01ade53daab77",
"assets/assets/images/3.0x/ic_checked_radio.png": "55a1c26bba67077934741de2d1f26fb1",
"assets/assets/images/3.0x/ic_document.png": "f6232ac267ecb8eb14a842a3001807fa",
"assets/assets/images/3.0x/ic_logout.png": "b22bcdb067d35df7ea77e46c9a99b99b",
"assets/assets/images/3.0x/ic_jcb.png": "b17cd6c1956283cd3b532e2b1c3f2324",
"assets/assets/images/3.0x/ic_inbox.png": "8d739c9a10252245ba15818fea1f2156",
"assets/assets/images/3.0x/ic_maestro.png": "48d959a01aaaa3f371cb396d9193c7cf",
"assets/assets/images/3.0x/ic_mir.png": "7e12cf1e903db5dcc8c625bd22a456ee",
"assets/assets/images/3.0x/ic_bank_account.png": "483b96fffd27ca476155d14404b8ff84",
"assets/assets/images/3.0x/Logo.png": "7a1ad0024fe7473b25d4a7beb2117026",
"assets/assets/images/3.0x/ic_payment.png": "4785f073cbc161522791017e786640e8",
"assets/assets/images/3.0x/ic_settings.png": "b56cc3034690dd2e628cfb15d0d194a2",
"assets/assets/images/3.0x/ic_contact.png": "5ef11b3d01b722036b3f1d0c52b718ae",
"assets/assets/images/3.0x/ic_discover.png": "86dadb9cc3e2b3cd9f0e1ac860c5f72d",
"assets/assets/images/3.0x/ic_back.png": "cc83b51b9f2a10555c83f999ef3b9813",
"assets/assets/images/3.0x/ic_checked.png": "2e74e9f174892509bfb70f197d3627b1",
"assets/assets/images/3.0x/ic_calender.png": "ec95352eba8e0d8a05166cbfa197b4e4",
"assets/assets/images/3.0x/car_marker.png": "b5d0846bc8d686a3fe7988e3dde6ca9a",
"assets/assets/images/3.0x/driver_scooter.png": "e542d4a912aae37d371fa785283a56e6",
"assets/assets/images/3.0x/ic_navigation.png": "4922e7cb140af999439cef722e6784c8",
"assets/assets/images/3.0x/ic_drop_down.png": "05cfe4b226acd0208c243bc08904ccb2",
"assets/assets/images/3.0x/ic_location_green.png": "c5da9b19b8eb211226334690b08de447",
"assets/assets/images/3.0x/ic_call.png": "c30956c5e32bc5d9a2d00dcab409bf2c",
"assets/assets/images/3.0x/ic_diners.png": "2046f1d7d69d9f779f6b9630c68a1e69",
"assets/assets/images/3.0x/ic_hipercard.png": "8b47b913a788dfc54d2fc0a230f2ab84",
"assets/assets/images/3.0x/ic_contact_call.png": "b77d3a542260631e13b7ed4b33527916",
"assets/assets/images/3.0x/ic_terms.png": "b0e5a822ea958d83ac9a05df523c1a40",
"assets/assets/images/3.0x/ic_earnings.png": "57d034a94cdde9c9568950e0e157912c",
"assets/assets/images/3.0x/ic_instructions.png": "9fb23dcf616a4569a8a60dd964e872b6",
"assets/assets/images/3.0x/ic_mastercard.png": "26443aac381f676d3ed41850f491266c",
"assets/assets/images/ic_unchecked_box.png": "fadf1c5dd6d6a0fe2fd01ade53daab77",
"assets/assets/images/ic_checked_radio.png": "bb4073326d829c337c64a35809b11ac7",
"assets/assets/images/ic_document.png": "d76207dd46ba2b383247739867cacf07",
"assets/assets/images/ic_logout.png": "4d89061ea3a398590087682b4b6d4c2a",
"assets/assets/images/ic_jcb.png": "121ecc5e4e1379637af35fb5ac133f45",
"assets/assets/images/ic_inbox.png": "8e95395fa3676a8ebb99c37105c7a86c",
"assets/assets/images/ic_maestro.png": "7613dbae263a9f3a17de70b6ad1856dd",
"assets/assets/images/ic_mir.png": "7e12cf1e903db5dcc8c625bd22a456ee",
"assets/assets/images/ic_bank_account.png": "42683f9cba6a7a3a7a849ab84fc7af93",
"assets/assets/images/Logo.png": "9ddecede86b6b4e15bcf3cd5a6fa102d",
"assets/assets/images/ic_payment.png": "f2e8ed74d0ad31c437724be8b8942dee",
"assets/assets/images/ic_settings.png": "15a66586b05959e06b54c27ae4b0401f",
"assets/assets/images/ic_contact.png": "1255f8250c317d07ade5316948dc5efc",
"assets/assets/images/ic_discover.png": "2637231728a4833b6fb4b9ad17b23785",
"assets/assets/images/ic_back.png": "8e7e471a500af40739874ddcbdaa849e",
"assets/assets/images/ic_checked.png": "efca4ece3c23edd285a3f1892c0621c6",
"assets/assets/images/ic_calender.png": "63ed31ee68e4271a894cbff46736e670",
"assets/assets/images/car_marker.png": "ad59283e8dbc4fb70fdcbf1c9268b669",
"assets/assets/images/driver_scooter.png": "1cced4d6b7766a6e1f53308d1814a15b",
"assets/assets/images/ic_navigation.png": "d5e948652d0b08846895d9df8ef4473a",
"assets/assets/images/driver_marker_2.png": "bc9eb0a936a4781cf66086b0a0b0eb79",
"assets/assets/images/ic_drop_down.png": "dc177d38330399c6ad9a909602546ae8",
"assets/assets/images/ic_location_green.png": "ce982ed5ba5f909552e1c2d803c3340a",
"assets/assets/images/ic_call.png": "02092525b254d21538540b2cf1d7dc00",
"assets/assets/images/ic_diners.png": "3de9830d452b3455d43a1cc556edf28f",
"assets/assets/images/ic_hipercard.png": "8b47b913a788dfc54d2fc0a230f2ab84",
"assets/assets/images/ic_contact_call.png": "7eef5e3dd83c9a654dbaf8f8801994d4",
"assets/assets/images/ic_terms.png": "8a85e5615628d9c81073468ca3d23069",
"assets/assets/images/ic_earnings.png": "2a929b8abb760aaf5d50a37b8ac2326c",
"assets/assets/images/image.png": "7189816ca25e67e4ccb0f58410b439d6",
"assets/assets/images/ic_instructions.png": "93a2f321eeade7bd48dfe6a5be8f55d7",
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
