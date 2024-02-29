// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-a3329.firebaseapp.com",
  projectId: "mern-blog-a3329",
  storageBucket: "mern-blog-a3329.appspot.com",
  messagingSenderId: "600251043047",
  appId: "1:600251043047:web:7fc4d2b6373fe58ed36642"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);