importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.5/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyCdQg0vmdfHf9cZ97xDy4hbEh52Dj5Gd4U',
  authDomain: 'sapo-notifications.firebaseapp.com',
  projectId: 'sapo-notifications',
  storageBucket: 'sapo-notifications.appspot.com',
  messagingSenderId: '502016953950',
  appId: '1:502016953950:web:15601328179ce2fb2e6ecf',
  measurementId: 'G-9BLNQZ56YF'
});

const messaging = firebase.messaging();

// messaging.onMessage((payload) => {
//   console.log('Message received. ', payload);
// });

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
