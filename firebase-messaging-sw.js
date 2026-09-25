importScripts("https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/12.19.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyAzDUMBVG_WoBv3sN6oHheDieBYFxQ9V5M",
  authDomain: "greenfeed-bao-cao-ngay.firebaseapp.com",
  projectId: "greenfeed-bao-cao-ngay",
  storageBucket: "greenfeed-bao-cao-ngay.firebasestorage.app",
  messagingSenderId: "1017152829039",
  appId: "1:1017152829039:web:116c2288b5e5a03cae3f9a"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("Received background message:", payload);
  const notificationTitle = payload.notification?.title || "Thông báo";
  const notificationOptions = {
    body: payload.notification?.body || "",
    icon: "/icon-192.png",
    badge: "/icon-192.png"
  };
  
  self.registration.showNotification(notificationTitle, notificationOptions);
});
