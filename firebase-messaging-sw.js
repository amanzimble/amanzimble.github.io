importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

   /*Update with yours config*/
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

  /*messaging.onMessage((payload) => {
  console.log('Message received. ', payload);*/
  messaging.onBackgroundMessage(function(payload) {
     console.log("Received background message ", payload);

     const notificationTitle = payload.notification.title;
     const notificationOptions = {
       body: payload.notification.body,
     };

     self.registration.showNotification(notificationTitle, notificationOptions);
   });