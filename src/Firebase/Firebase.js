// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM2NQKsHv409kDhS1tWHxAQFX8jCbX5xU",
  authDomain: "twitter-clone-7285f.firebaseapp.com",
  projectId: "twitter-clone-7285f",
  storageBucket: "twitter-clone-7285f.appspot.com",
  messagingSenderId: "680325612447",
  appId: "1:680325612447:web:dacae1594fef195aef73aa",
  measurementId: "G-VH93WQ2LLP"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, storage };

export default db;