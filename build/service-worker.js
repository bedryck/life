/* eslint-disable no-unused-vars */
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v5').then((cache) => {
            return cache.addAll([
                '/index.html',
                '/js/app.b2696914.js',
                '/js/app.b2696914.js.map',
                '/js/chunk-vendors.04846e77.js',
                '/js/chunk-vendors.04846e77.js.map',
                '/css/app.2eb91960.css',
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