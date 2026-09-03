/* ONE - offline shell.
   Network first so a fresh deploy always wins, cache second so a dead signal
   never costs you your day. Task data lives in localStorage, not here.

   CACHE carries the build stamp, so installing a new worker cannot reuse the
   old worker's files: the activate step below bins every cache that isn't this
   build's. That is the difference between an update landing and an update
   "getting stuck". */
var BUILD = '20260903-1255-ca265a';
var CACHE = 'one-' + BUILD;
var CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', function (e) {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function (c) {
    /* cache:'reload' goes past the browser's own HTTP cache - otherwise a fresh
       worker can dutifully cache a stale index.html and nothing has changed. */
    return Promise.all(CORE.map(function (u) {
      return fetch(new Request(u, { cache: 'reload' })).then(function (res) {
        if (res && res.ok) return c.put(u, res);
      }).catch(function () {});
    }));
  }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; })
                             .map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  /* Opening the app always asks the network for the real page, ignoring any
     copy the browser is sitting on. Everything else can go through normally. */
  var nav = e.request.mode === 'navigate';
  var req = nav ? new Request(e.request.url, { cache: 'reload', credentials: 'same-origin' })
                : e.request;
  e.respondWith(
    fetch(req).then(function (res) {
      if (res && res.status === 200 && res.type === 'basic') {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(e.request).then(function (hit) {
        return hit || caches.match('./index.html');
      });
    })
  );
});

/* An escape hatch the page can pull if an update is ever still stuck: wipe the
   shell caches and let the next load rebuild them from the network. */
self.addEventListener('message', function (e) {
  if (!e.data || e.data.type !== 'one-reset') return;
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.map(function (k) { return caches.delete(k); }));
  }));
});
