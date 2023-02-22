// Import the functions you need from the SDKs you need
import { initializeApp, getApp , getApps} from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ,
  authDomain: "project-social-network-75690.firebaseapp.com",
  projectId: "project-social-network-75690",
  storageBucket: "project-social-network-75690.appspot.com",
  messagingSenderId: "169158653480",
  appId: "1:169158653480:web:72fe6be1286befa129271d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp(); 
const db = getFirestore();
const storage = getStorage();
export {app, db ,storage};