// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFaaXNw_rOYXMrfMF9kFdzBY-u6bwV9cA",
  authDomain: "podcast-de504.firebaseapp.com",
  projectId: "podcast-de504",
  storageBucket: "podcast-de504.appspot.com",
  messagingSenderId: "500619287946",
  appId: "1:500619287946:web:c73b812d26049cfcd77c73",
  measurementId: "G-SFES8FTQ1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore(app);
const storage= getStorage(app);
const auth=getAuth(app);

export {db,storage,auth};
