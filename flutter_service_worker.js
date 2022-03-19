'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "2c228f748417dec81901f7b982ce4544",
"index.html": "d8e19aa188af35282cf691df26e4e8bb",
"/": "d8e19aa188af35282cf691df26e4e8bb",
"main.dart.js": "40346222772821d5423118dafc4badef",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "65bfb13a342437d6c33056986847f557",
"assets/AssetManifest.json": "960c468885461bd055a12bbba874bedb",
"assets/NOTICES": "71b9678ff223c8007018e40b6afffa1b",
"assets/FontManifest.json": "cf3c681641169319e61b61bd0277378f",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/khalti_flutter/assets/payment/connect-ips.svg": "d6dec4787c7233dc7f5862f588355dfd",
"assets/packages/khalti_flutter/assets/payment/ebanking.svg": "f3194c2c543b2dc3211ad66d7b38776f",
"assets/packages/khalti_flutter/assets/payment/wallet.svg": "334172609f45671f3a6fc8494f5359de",
"assets/packages/khalti_flutter/assets/payment/mobilebanking.svg": "d330bd6fa7f5c1445121042b85a86b50",
"assets/packages/khalti_flutter/assets/payment/sct.svg": "391f0a569f6021ba08b2bace6067538d",
"assets/packages/khalti_flutter/assets/dialog/info.svg": "c10fa621ec57b2cec6e0b15d35f0ba69",
"assets/packages/khalti_flutter/assets/dialog/success.svg": "49566d38a0c225e95241c025b87d962c",
"assets/packages/khalti_flutter/assets/dialog/error.svg": "04bdc43ab1451975f939f0b40289c5fb",
"assets/packages/khalti_flutter/assets/logo/khalti.svg": "ca48562ef24de3a8e31901de5845aaa8",
"assets/packages/khalti_flutter/assets/logo/khalti-inner-icon.svg": "1f349f9fd4f4b2f2c4df8afdd7f7c71e",
"assets/packages/khalti_flutter/assets/logo/connect-ips.svg": "ea35ce77ea086b55778f3f5356658201",
"assets/packages/khalti_flutter/assets/logo/sct.svg": "8b032a098e9073d75e8bda7079492cba",
"assets/packages/khalti_flutter/assets/error/no-internet.svg": "770e67f4e2118e6404d573b7be8e3cca",
"assets/packages/khalti_flutter/assets/error/general-error.svg": "e64aa723b6f78b8aeff9eeb7f6785f52",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/empty_alerts.svg": "0073eb2c8b84fac78df6e5f12268c30d",
"assets/assets/khalti.png": "f94b6981d3c06934a4881bc0c30ad3ed",
"assets/assets/ic_launcher.png": "9e3ac77f142ff9f99cd5f2a14490299d",
"assets/assets/notification.wav": "1cd120af88e39f3da95a75e2538cda0d",
"assets/assets/empty_notes.svg": "e11e8306b6051de05e29ac09d7195bd0",
"assets/assets/empty_watchlist.svg": "4901387bf18e683f631856bab38fc1fd",
"assets/assets/esewa.png": "e1b532c29d4627beaaa2b7868374f0e5",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
