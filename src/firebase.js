import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // <-- Add this import
// import { getAnalytics } from "firebase/analytics"; // Optional, can be removed

const firebaseConfig = {
  apiKey: "AIzaSyBpitz9dgUzgiLOUX6SoSCbIvwIOkKB-bo",
  authDomain: "fb-auth-roshan.firebaseapp.com",
  projectId: "fb-auth-roshan",
  storageBucket: "fb-auth-roshan.appspot.com",
  messagingSenderId: "80163241372",
  appId: "1:80163241372:web:a16a4203fa8a6e9ae1dc59",
  measurementId: "G-E5NFWE22B8"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app); 