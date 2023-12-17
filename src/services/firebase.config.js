// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// import {getFirestore} from 'firebase/firestore/lite'
// import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAej8XSG3m_lEZ_En9jkplWgqeH9mS6yDY",
    authDomain: "fir-auth-80f38.firebaseapp.com",
    projectId: "fir-auth-80f38",
    storageBucket: "fir-auth-80f38.appspot.com",
    messagingSenderId: "1074856892171",
    appId: "1:1074856892171:web:cc110efab33de46ca1740e",
    measurementId: "G-69ZFC0CMJ8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app);
const analytics = getAnalytics(app);
// export const db = getFirestore(app)
// export const storage = getStorage(app)

