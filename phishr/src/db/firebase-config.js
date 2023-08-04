
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// ADD YOUR OWN FIREBASE CONFIG HERE
const firebaseConfig = {
  apiKey: "AIzaSyBa_DkSWmJiBRCMGOJ1dLBB9fA67kSTZgI",
  authDomain: "csecdetection.firebaseapp.com",
  projectId: "csecdetection",
  storageBucket: "csecdetection.appspot.com",
  messagingSenderId: "887767172853",
  appId: "1:887767172853:web:abb74f7804f5151d7de7bc"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(firebaseApp);
const googleAuthProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore
export const db = getFirestore(firebaseApp);
export { auth, googleAuthProvider };
