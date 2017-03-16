import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  // apiKey: "<your-api-key>",
  // authDomain: "<your-auth-domain>",
  databaseURL: "https://coachella-queen.firebaseio.com",
  // storageBucket: "<your-storage-bucket>",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const scheduleRef = firebaseApp.database().ref('v1/schedule');

export {
  scheduleRef,
};
