// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd6HQ4xWK6vph9M8ZJhBXVE3GQkNZQGuk",
  authDomain: "eventmanagement-d8aa6.firebaseapp.com",
  projectId: "eventmanagement-d8aa6",
  storageBucket: "eventmanagement-d8aa6.firebasestorage.app",
  messagingSenderId: "138007696417",
  appId: "1:138007696417:web:f67fa6e5d63d69842bbf60",
  measurementId: "G-9ZW1J5HET0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword , sendPasswordResetEmail };
