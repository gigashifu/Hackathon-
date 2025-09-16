const CACHE_NAME = "nabha-shiksha-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/assets/css/style.css",
  "/assets/js/script.js",
  "/assets/images/apple-touch-icon.png",
  "/assets/images/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
