import * as firebase from "firebase";
import "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  // config keys goes here
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };

// firebase version: 8.2.3
// "firebase": ^9.14.0,
//npm install firebase
