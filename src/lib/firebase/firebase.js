// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkVU9J1QNI9NZeRG_YjR0t9VFiXCCg7qk",
  authDomain: "khoanvdev.firebaseapp.com",
  projectId: "khoanvdev",
  storageBucket: "khoanvdev.appspot.com",
  messagingSenderId: "124115135432",
  appId: "1:124115135432:web:9cab4a4ce72c6b07b6eefd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
