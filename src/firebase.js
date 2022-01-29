import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDgCYe9PmabUdZT8m3hfG2WhY2VseXFSbY",
    authDomain: "eshop-a6746.firebaseapp.com",
    projectId: "eshop-a6746",
    storageBucket: "eshop-a6746.appspot.com",
    messagingSenderId: "170662276863",
    appId: "1:170662276863:web:037f5af9c78428239326ca",
    measurementId: "G-4YMGX6SXW4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

