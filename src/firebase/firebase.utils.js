import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config  = {
    apiKey: "AIzaSyBGYznTnctJ4WwR04rlaJV544I-lpLEeOo",
    authDomain: "crown-db-de0a4.firebaseapp.com",
    databaseURL: "https://crown-db-de0a4.firebaseio.com",
    projectId: "crown-db-de0a4",
    storageBucket: "crown-db-de0a4.appspot.com",
    messagingSenderId: "901636034830",
    appId: "1:901636034830:web:edfcc6fc6b468bc213475f",
    measurementId: "G-ZY64KW15HF"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;