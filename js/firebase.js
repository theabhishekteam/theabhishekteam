// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLtKxYdVj7wNM5qCi9FFQHu8AC1xjBm2Q",
  authDomain: "theabhishekteam-33a5a.firebaseapp.com",
  projectId: "theabhishekteam-33a5a",
  storageBucket: "theabhishekteam-33a5a.firebasestorage.app",
  messagingSenderId: "881466901633",
  appId: "1:881466901633:web:470be04544b56b1f047980",
  measurementId: "G-RJ1SRTTR58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
