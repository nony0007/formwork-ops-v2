self.addEventListener('install', e=>{
  e.waitUntil(caches.open('fops-v2').then(c=>c.addAll(['./','./index.html','./404.html','./style.css','./app.js','./data.js','./manifest.json'])));
});
self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});