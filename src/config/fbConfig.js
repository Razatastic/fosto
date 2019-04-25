import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const fbApiKey = process.env.REACT_APP_FB_API_KEY;

// Initialize Firebase
var config = {
  apiKey: fbApiKey,
  authDomain: "fosto-app.firebaseapp.com",
  databaseURL: "https://fosto-app.firebaseio.com",
  projectId: "fosto-app",
  storageBucket: "fosto-app.appspot.com",
  messagingSenderId: "719812973373"
};
firebase.initializeApp(config);

export default firebase;
