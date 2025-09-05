self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("click-game-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "style.css",
        "game.js",
        "manifest.json",
        "image-192.jpg",
        "image-512.jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

