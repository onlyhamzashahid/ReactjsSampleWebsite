// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDvrvYitzJ_BZBQTvZ5zE78WWDmji62pDk",
  authDomain: "bittorry.firebaseapp.com",
  projectId: "bittorry",
  storageBucket: "bittorry.appspot.com",
  messagingSenderId: "725821708078",
  appId: "1:725821708078:web:85325dee541a816f5b8cbf",
  measurementId: "G-550FF55R0P",
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);

export const db = getFirestore(fire);
export const auth = getAuth();
export const storage = getStorage(fire);
export const onAuth= onAuthStateChanged;


export default fire;

