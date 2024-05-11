// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGf4DTx64PjM4gyWwyHEuqZj_ghEk-cIo",
  authDomain: "knowledge-hub-8809f.firebaseapp.com",
  projectId: "knowledge-hub-8809f",
  storageBucket: "knowledge-hub-8809f.appspot.com",
  messagingSenderId: "249519349810",
  appId: "1:249519349810:web:51c31696d44e55d9f05c2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth