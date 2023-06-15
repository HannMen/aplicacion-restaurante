import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBeSAHeKh_cK7fe8eWCVlYLUNTqOJNEXM8",
  authDomain: "reservations-66367.firebaseapp.com",
  projectId: "reservations-66367",
  storageBucket: "reservations-66367.appspot.com",
  messagingSenderId: "147249280807",
  appId: "1:147249280807:web:ce475b4fcdd172bba41b02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}