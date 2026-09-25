importScripts("https://www.gstatic.com/firebasejs/12.19.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.19.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAzDUMBVG_WoBv3sN6oHheDieBYFxQ9V5M",
  authDomain: "greenfeed-bao-cao-ngay.firebaseapp.com",
  projectId: "greenfeed-bao-cao-ngay",
  storageBucket: "greenfeed-bao-cao-ngay.firebasestorage.app",
  messagingSenderId: "1017152829039",
  appId: "1:1017152829039:web:116c2288b5e5a03cae3f9a"
});

const messaging = firebase.messaging();

// Tin có "notification" thì Firebase tự hiển thị; tin chỉ có "data" thì tự hiển thị ở đây.
messaging.onBackgroundMessage(function (payload) {
  if (payload.notification) return;
  const d = payload.data || {};
  self.registration.showNotification(d.title || "Báo cáo ngày GreenFeed", {
    body: d.body || "",
    icon: "icon-192.png",
    badge: "icon-192.png",
    data: { url: d.url || "./" }
  });
});

self.addEventListener("notificationclick", function (event) {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || "./";
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then(function (list) {
      for (const c of list) { if ("focus" in c) return c.focus(); }
      return clients.openWindow(url);
    })
  );
});
