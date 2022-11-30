// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm6oE-JBV6arYsPr0dbiTobEj_PURX7yE",
  authDomain: "movieflex-487f6.firebaseapp.com",
  projectId: "movieflex-487f6",
  storageBucket: "movieflex-487f6.appspot.com",
  messagingSenderId: "605080603775",
  appId: "1:605080603775:web:a03c3a4e27da175b45434a",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
