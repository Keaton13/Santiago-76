/*
 * Retires the old offline-cache service worker.
 *
 * Earlier versions of the site installed a service worker that saved a copy of
 * the site on each visitor's device and kept showing that copy after updates.
 * Browsers check this file for changes on every visit; when they get this
 * version it deletes the saved copy, removes itself, and reloads open tabs
 * once so visitors see the current site.
 *
 * Keep this file in place for a few months so returning visitors pick it up.
 */
self.addEventListener("install", function () {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    (async function () {
      const keys = await caches.keys();
      await Promise.all(keys.map(function (key) { return caches.delete(key); }));
      await self.registration.unregister();
      const tabs = await self.clients.matchAll({ type: "window" });
      tabs.forEach(function (tab) { tab.navigate(tab.url); });
    })()
  );
});
