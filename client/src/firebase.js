// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4cf2f.firebaseapp.com",
  projectId: "mern-blog-4cf2f",
  storageBucket: "mern-blog-4cf2f.appspot.com",
  messagingSenderId: "859372353370",
  appId: "1:859372353370:web:f1b3341e8281e7091aa563"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);