self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-youtube-cache').then(function(cache) {
      cache.add('https://www.youtube-nocookie.com/embed/?v=Tx1sqYc3qas&list=RDTx1sqYc3qas');
    })
  );
});

self.addEventListener('fetch', function(event) {
  if (event.request.url.startsWith('https://www.youtube-nocookie.com/embed/')) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        if (response) {
          return response;
        } else {
          return fetch(event.request);
        }
      })
    );
  }
});
