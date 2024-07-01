// Cấu hình  firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_KEY_FIREBASE,
  authDomain: "project-hkii.firebaseapp.com",
  projectId: "project-hkii",
  storageBucket: "project-hkii.appspot.com",
  messagingSenderId: "982387994119",
  appId: "1:982387994119:web:7997ab6cebb77373a3c4a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
