importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyD7z5z5z5z5z5z5z5z5z5z5z5z5z5z5z5",
  authDomain: "odliczanie-2026.firebaseapp.com",
  projectId: "odliczanie-2026",
  messagingSenderId: "103953800507",
  appId: "1:103953800507:web:123456789"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification?.title || 'Odliczanie zakończone!';
  const notificationOptions = {
    body: payload.notification?.body || 'Twoje odliczanie właśnie się skończyło!',
    icon: '/zegar-192x192.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});


self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});
