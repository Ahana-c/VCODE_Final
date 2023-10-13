// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDSTL0kLTZ0lxIDHCZz6AgCfhEgOwrBEz4",
    authDomain: "vcode-web.firebaseapp.com",
    projectId: "vcode-web",
    storageBucket: "vcode-web.appspot.com",
    messagingSenderId: "716120975657",
    appId: "1:716120975657:web:2405ec670834f82227af38",
    measurementId: "G-30VP3GDTBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
