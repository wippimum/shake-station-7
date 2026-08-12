/* Shake Station 7 — offline service worker.
   The course is meant to work on a tablet in a car, on a plane, or anywhere
   the wifi has given up. Everything it needs is cached on first visit.

   Bump CACHE when the course content changes, otherwise tablets keep serving
   the old copy from disk. */
const CACHE = 'shake-station-7-v1';

const SHELL = [
  './',
  './index.html',
  './reader.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-180.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      // addAll is all-or-nothing; one 404 would throw away the whole install,
      // so each file is allowed to fail on its own
      .then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== location.origin) return;

  // Pages: try the network first so a republished course arrives, but fall
  // back to cache the moment the connection is not there.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
    );
    return;
  }

  // Everything else (icons, manifest): cache first, it does not change often.
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res && res.status === 200) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
      }
      return res;
    }).catch(() => hit || new Response('', { status: 504, statusText: 'Offline' })))
  );
});
