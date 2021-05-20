import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyDl9SxtcCV3YVBHr-XYytUS1hu1vWheR5k",
    authDomain: "my-fa1c1.firebaseapp.com",
    projectId: "my-fa1c1",
    storageBucket: "my-fa1c1.appspot.com",
    messagingSenderId: "981575514814",
    appId: "1:981575514814:web:b8b3eae07364a04927fcef",
    measurementId: "G-YQDD0CLDN2"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider };