// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyBrhCUmOovy-gDyMJPAmHplsw_QncMSB5c",
    authDomain: "tools-f899a.firebaseapp.com",
    projectId: "tools-f899a",
    storageBucket: "tools-f899a.appspot.com",
    messagingSenderId: "281977708718",
    appId: "1:281977708718:web:339f7ef62496612c210d3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth