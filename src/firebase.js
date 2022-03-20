// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAszNjvjbyDdzviuY0mqNQ22U3uV97xas8",
  authDomain: "disney-clone-3835b.firebaseapp.com",
  projectId: "disney-clone-3835b",
  storageBucket: "disney-clone-3835b.appspot.com",
  messagingSenderId: "199926631246",
  appId: "1:199926631246:web:2d9067a6a248e52b4d2c1f",
  measurementId: "G-4WY2C7CRGY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
