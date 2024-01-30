importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');


  const firebaseConfig = {
      apiKey: "AIzaSyB_gb07rei8CG_tnvPR0iAtuUtnhBGbQNc",
      authDomain: "puffguys-cb72d.firebaseapp.com",
      projectId: "puffguys-cb72d",
      storageBucket: "puffguys-cb72d.appspot.com",
      messagingSenderId: "698976600856",
      appId: "1:698976600856:web:cd0b419adde6cb3795d46d",
      measurementId: "G-3JM33GZ5K8",
    };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();


  messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });