var cacheName = 'my-cache'
var cacheList = ['/cache1.css']

self.addEventListener('install', function (event) {
  event.waitUtil(

    cacheList.open(cacheName).then(function (cache) {
      return cache.addAll(cacheList)
    })
  )
})

//监听service worker fetch
self.addEventListener('fetch', function (event) {
  event.respondWith(
    cache.match(event.request)
      .then(function (response) {
        if (response) {
          console.log(response)
          return response;
        }

        return fetch(event.request);
      })
  )
})