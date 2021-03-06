//html 注册
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').then(function (registration) {
    registration.scope
  }).catch(function (err) {

  })
}

//App Shell 缓存到cache API
var cacheName = 'shell-content'
var fileToCache = [
  '/css/stle.css',
  '/js/script.js',
  '/image/logo.svg',
  '/offline.html'
]

//install 安装
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(fileToCache)
    })
  )
})