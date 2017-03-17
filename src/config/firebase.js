import * as firebase from 'firebase';

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

// ---------------------------------------------------------------------

// import Firestack from 'react-native-firestack';
//
// const DATA_KEY = 'v1/schedule';
//
// const firebaseConfig = {
//     // debug: '*',
//     // apiKey: "Your api key",
//     // authDomain: "Your auth domain",
//     databaseURL: "https://coachella-queen.firebaseio.com",
//     // storageBucket: "Your storage bucket",
//     // googleAppId: 'Your google app ID'
// };
//
// const firestack = new Firestack(firebaseConfig);
// const scheduleRef = firestack.database.ref(DATA_KEY);
//
//
// export {
//   firestack,
//   scheduleRef,
// };
