import firebase from 'firebase/app';
import 'firebase/messaging';

export class Messaging {

  constructor() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCdQg0vmdfHf9cZ97xDy4hbEh52Dj5Gd4U',
      authDomain: 'sapo-notifications.firebaseapp.com',
      projectId: 'sapo-notifications',
      storageBucket: 'sapo-notifications.appspot.com',
      messagingSenderId: '502016953950',
      appId: '1:502016953950:web:15601328179ce2fb2e6ecf',
      measurementId: 'G-9BLNQZ56YF'
    });
  }

  getToken() {
    const messaging = firebase.messaging();

    messaging
      .getToken({
        vapidKey: 'BMW16QIinb85TsMi4VHT6Ivtj22G8NbB070-Ds9peu9jdllIgvMF_1_fMswavqEnWLNZAGX_an6BE-TKHXeeEnc'
      })
      .then(currentToken => {
        if (currentToken) {
          console.log('currentToken', currentToken);
          return;
        }

        console.log('not registration token available');
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  }
}

const message = new Messaging();

message.getToken();
