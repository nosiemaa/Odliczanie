importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDXXXXXXX",          // Twój z ekranu
  authDomain: "odliczanie-2026.firebaseapp.com",
  projectId: "odliczanie-2026",
  messagingSenderId: "1039538080607",
  appId: "1:1039538080607:web:1123456789"
});

const messaging = firebase.messaging();

// Powiadomienia w tle
messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon.png"
  });
});
