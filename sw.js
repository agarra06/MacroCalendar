self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => clients.claim());
// Pas de cache — on veut toujours les données fraîches
