// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCneisniVg2KADm1wA5v7ZkfP5kIlUSmJU",
  authDomain: "netflixgpt-4a60d.firebaseapp.com",
  projectId: "netflixgpt-4a60d",
  storageBucket: "netflixgpt-4a60d.firebasestorage.app",
  messagingSenderId: "314604315665",
  appId: "1:314604315665:web:acf7757aa786dce0be7db0",
  measurementId: "G-T9X8XXPZ74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();