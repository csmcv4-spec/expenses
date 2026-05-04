// Minimal service worker — exists so Chrome treats the app as installable.
// Doesn't cache anything; the app handles its own offline behaviour via localStorage.
self.addEventListener("install", (e) => self.skipWaiting());
self.addEventListener("activate", (e) => self.clients.claim());
self.addEventListener("fetch", (e) => { /* pass-through */ });
