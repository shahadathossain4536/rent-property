import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbC7y7maXgp0kcapolqqqUL8oHz-SUXVY",
  authDomain: "rent-property-c650e.firebaseapp.com",
  projectId: "rent-property-c650e",
  storageBucket: "rent-property-c650e.appspot.com",
  messagingSenderId: "905495060541",
  appId: "1:905495060541:web:85882c47fea4741c4c8a54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
