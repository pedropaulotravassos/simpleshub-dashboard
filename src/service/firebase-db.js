import firebase from "firebase/compat/app";
import "firebase/compat/database";

let firebaseConfig = {
  apiKey: "AIzaSyC4KmnqfT49ecv0r4hGYvbNgAtuCE6GBIM",
  authDomain: "auth-nuxt-mvp.firebaseapp.com",
  databaseURL: "https://auth-nuxt-mvp-default-rtdb.firebaseio.com",
  projectId: "auth-nuxt-mvp",
  storageBucket: "auth-nuxt-mvp.appspot.com",
  messagingSenderId: "962416747885",
  appId: "1:962416747885:web:b5baf288932642ed736664",
  measurementId: "G-9V2TSLPBXY",
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.database().ref("/client");
export { db };
