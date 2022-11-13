importScripts('https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.7.0/firebase-messaging.js')

firebase.initializeApp({
  apiKey: "AIzaSyBFZcrRe-HGMTbAT9hkpcwKg6BLxn6EySI",
  authDomain: "alex-94fe5.firebaseapp.com",
  projectId: "alex-94fe5",
  storageBucket: "alex-94fe5.appspot.com",
  messagingSenderId: "891957824599",
  appId: "1:891957824599:web:036b2b43b390b927982712",
  measurementId: "G-HX2ZTM0H2Q"
})

const messaging = firebase.messaging();


messaging.onBackgroundMessage((payload) => {

    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {body: payload.notification.body,};
    return self.registration.showNotification(notificationTitle,notificationOptions);
  });

self.addEventListener('notificationclick', event => {
  console.log(event)
});

//
// messaging.onBackgroundMessage(function(payload) {
//   console.log("Received background message ", payload);
//
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//   };
//
//   self.registration.showNotification(notificationTitle, notificationOptions);
// });
