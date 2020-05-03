/* eslint-disable no-unused-vars */
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '/index.html',
                '/js/app.289c4a4f.js',
                '/js/app.289c4a4f.js.map',
                '/js/chunk-vendors.42ac218e.js',
                '/js/chunk-vendors.42ac218e.js.map',
                '/css/app.ba587dee.css',
                '/icons/icon.png',
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    console.log(event.request.url);

    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});