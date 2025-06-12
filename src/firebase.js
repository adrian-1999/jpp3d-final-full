// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSwUzZGvy7Ct1DpgV7y3ux-iET_F6PLm8",
 authDomain: "jpp3d-login.firebaseapp.com",
  projectId: "jpp3d-login",
  storageBucket: "jpp3d-login.appspot.com",
  messagingSenderId: "48989381352",
  appId: "1:48989381352:web:b4dc919f77561da190c9d",
  measurementId: "G-GHY93GGB8H"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
