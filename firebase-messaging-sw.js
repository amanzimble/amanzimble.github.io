/*importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

   *//*Update with yours config*//*
  const firebaseConfig = {
    apiKey: "AIzaSyBLQFRBcbV5RVKraUu7OVH8ITGPU_cIJ4g",
    authDomain: "flutterwebfcm.firebaseapp.com",
    projectId: "flutterwebfcm",
    storageBucket: "flutterwebfcm.appspot.com",
    messagingSenderId: "948323628133",
    appId: "1:948323628133:web:4fd8c6cac020b70f6cc28c",
    measurementId: "G-EX8C45PXB7"
    };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();*/






importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

  const firebaseConfig = {
    apiKey: "AIzaSyBLQFRBcbV5RVKraUu7OVH8ITGPU_cIJ4g",
    authDomain: "flutterwebfcm.firebaseapp.com",
    projectId: "flutterwebfcm",
    storageBucket: "flutterwebfcm.appspot.com",
    messagingSenderId: "948323628133",
    appId: "1:948323628133:web:4fd8c6cac020b70f6cc28c",
    measurementId: "G-EX8C45PXB7"
    };

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

let darkPatternsValue = 0;

self.addEventListener('message', function(event){
  if (event.data && event.data.type === 'SET_DARK_PATTERNS_VALUE') {
    darkPatternsValue = event.data.value;
  }
});

messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);
    if(darkPatternsValue != 1){
      return;
    }
    lastNotificationId = currentNotificationId;

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
      };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', function(event) {
    console.log('Notification clicked ', event);
    alert("hhi there alert")
    event.notification.close();
    event.waitUntil(
        clients.openWindow('https://amanzimble.github.io/', '_self')
    );
 });