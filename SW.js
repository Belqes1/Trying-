const CACHE_NAME = 'art-exhibition-v1';
const ASSETS = [
  './',
  './index.html',
  './logo.png',
  './AUD-20261002-WA0009.mp3',
  './AUD-20261002-WA0011.mp3',
  './AUD-20261002-WA0057.mp3',
  './AUD-20261002-WA0058.mp3',
  './AUD-20261002-WA0059.mp3'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
