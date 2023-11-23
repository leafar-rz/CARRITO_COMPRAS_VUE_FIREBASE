// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore'; // se agrega :)

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.VITE_FIREBASE_API_KEY,
  authDomain: "turnkey-reality-403023.firebaseapp.com",
  projectId: "turnkey-reality-403023",
  storageBucket: "turnkey-reality-403023.appspot.com",
  messagingSenderId: "713971147324",
  appId: "1:713971147324:web:b472ca18b7c289fbf11939"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);