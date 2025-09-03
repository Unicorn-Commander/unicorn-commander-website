const CACHE_NAME = 'magic-unicorn-tech-v3-prod';

// Clear all old caches on install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Delete all old caches
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Skip waiting to activate immediately
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Claim all clients immediately
      return self.clients.claim();
    })
  );
});

// For production, bypass cache for HTML files and always fetch fresh
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Never cache HTML files or development assets
  if (url.pathname === '/' || 
      url.pathname === '/index.html' ||
      url.pathname.includes('/src/') ||
      url.pathname.includes('/node_modules/') ||
      url.pathname.includes('/@') ||
      url.pathname.includes('react-refresh') ||
      url.pathname.includes('vite')) {
    event.respondWith(
      fetch(event.request, {
        cache: 'no-store'
      })
    );
    return;
  }
  
  // For other assets, use network first with fallback to cache
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
