// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyDD6j8_b0ThwtHE8PIr5dlfOB4gZh2CiAA",
    authDomain: "lens-tree.firebaseapp.com",
    projectId: "lens-tree",
    storageBucket: "lens-tree.appspot.com",
    messagingSenderId: "101966136430",
    appId: "1:101966136430:web:1d7919e702a714c380d27f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth