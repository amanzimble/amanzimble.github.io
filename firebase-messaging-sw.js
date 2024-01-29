importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js");
firebase.initializeApp({
    apiKey: "AIzaSyB_gb07rei8CG_tnvPR0iAtuUtnhBGbQNc",
       authDomain: "puffguys-cb72d.firebaseapp.com",
       projectId: "puffguys-cb72d",
       storageBucket: "puffguys-cb72d.appspot.com",
       messagingSenderId: "698976600856",
       appId: "1:698976600856:web:cd0b419adde6cb3795d46d",
       measurementId: "G-3JM33GZ5K8",
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            const title = payload.notification.title;
            const options = {
                body: payload.notification.score
              };
            return registration.showNotification(title, options);
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});