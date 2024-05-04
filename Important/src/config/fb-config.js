// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC79pdE9cWEvW-_8-tG_NKDXcckBPTr870",
  authDomain: "codegirls-a0495.firebaseapp.com",
  projectId: "codegirls-a0495",
  storageBucket: "codegirls-a0495.appspot.com",
  messagingSenderId: "295371577496",
  appId: "1:295371577496:web:4ae6878a902d50e04a98ed",
  measurementId: "G-5RQY0564MC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const database = getDatabase();
export const messaging = getMessaging(app);
