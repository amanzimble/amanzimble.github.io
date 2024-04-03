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





importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js');

self.addEventListener('notificationclick', function (event) {
  console.debug('SW notification click event', event)
  const url = 'https://amanzimble.github.io/'
  event.waitUntil(
    clients.matchAll({type: 'window'}).then( windowClients => {
        // Check if there is already a window/tab open with the target URL
        for (var i = 0; i < windowClients.length; i++) {
            var client = windowClients[i];
            // If so, just focus it.
            if (client.url === url && 'focus' in client) {
                return client.focus();
            }
        }
        // If not, then open the target URL in a new window/tab.
        if (clients.openWindow) {
            return clients.openWindow(url);
        }
    })
);
})

firebase.initializeApp({
  apiKey: "AIzaSyBLQFRBcbV5RVKraUu7OVH8ITGPU_cIJ4g",
  authDomain: "flutterwebfcm.firebaseapp.com",
  projectId: "flutterwebfcm",
  storageBucket: "flutterwebfcm.appspot.com",
  messagingSenderId: "948323628133",
  appId: "1:948323628133:web:4fd8c6cac020b70f6cc28c",
  measurementId: "G-EX8C45PXB7"
})

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
})



//importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
//importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');
//
//  const firebaseConfig = {
//    apiKey: "AIzaSyBLQFRBcbV5RVKraUu7OVH8ITGPU_cIJ4g",
//    authDomain: "flutterwebfcm.firebaseapp.com",
//    projectId: "flutterwebfcm",
//    storageBucket: "flutterwebfcm.appspot.com",
//    messagingSenderId: "948323628133",
//    appId: "1:948323628133:web:4fd8c6cac020b70f6cc28c",
//    measurementId: "G-EX8C45PXB7"
//    };
//
//firebase.initializeApp(firebaseConfig);
//
//const messaging = firebase.messaging();
//
//let darkPatternsValue = 0;
//
//self.addEventListener('message', function(event){
//  if (event.data && event.data.type === 'SET_DARK_PATTERNS_VALUE') {
//    darkPatternsValue = event.data.value;
//  }
//});
//
//messaging.onBackgroundMessage(function(payload) {
//    console.log('Received background message ', payload);
//    if(darkPatternsValue != 1){
//      return;
//    }
//    lastNotificationId = currentNotificationId;
//
//    const notificationTitle = payload.notification.title;
//    const notificationOptions = {
//        body: payload.notification.body,
//      };
//
//    return self.registration.showNotification(notificationTitle, notificationOptions);
//});
//
//function handleClick (event) {
//  event.notification.close();
//  // Open the url you set on notification.data
//  clients.openWindow('https://amanzimble.github.io/')
//}
//self.addEventListener('notificationclick', handleClick);