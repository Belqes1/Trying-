const CACHE_NAME = 'art-gallery-v2';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './logo.png',
  './art1.html',
  './art2.html',
  './art3.html',
  './art4.html',
  './art5.html',
  './art6.html',
  './AUD-20261002-WA0009.mp3',
  './AUD-20261002-WA0010.mp3',
  './AUD-20261002-WA0011.mp3',
  './AUD-20261002-WA0057.mp3',
  './AUD-20261002-WA0058.mp3',
  './AUD-20261002-WA0059.mp3'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
