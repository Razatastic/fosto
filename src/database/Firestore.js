// src/firebase.js
import firebase from "firebase";

const firebaseApiKey = process.env.REACT_APP_FIREBASE_API_KEY;

const config = {
  apiKey: firebaseApiKey,
  authDomain: "fosto-app.firebaseapp.com",
  databaseURL: "https://fosto-app.firebaseio.com",
  projectId: "fosto-app",
  storageBucket: "fosto-app.appspot.com",
  messagingSenderId: "719812973373"
};

firebase.initializeApp(config);
export default firebase;
