import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwf4YgOvTka2gHruMmL6-i9jBltDbAUDc",
    authDomain: "netflix-clone-69f37.firebaseapp.com",
    projectId: "netflix-clone-69f37",
    storageBucket: "netflix-clone-69f37.appspot.com",
    messagingSenderId: "853751129534",
    appId: "1:853751129534:web:4dc2fa2c8c963bad2d05ef",
    measurementId: "G-THXV3M5NML"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;