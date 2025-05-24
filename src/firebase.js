// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD1aHSR3ein8o75Fd_I-1F_es2KGzDJFGo",
    authDomain: "portfolio-contact-334c0.firebaseapp.com",
    projectId: "portfolio-contact-334c0",
    storageBucket: "portfolio-contact-334c0.appspot.com",
    messagingSenderId: "217181279381",
    appId: "1:217181279381:web:4b460e6c73cb10fab6779c",
    measurementId: "G-WXY6WGK0ET"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
