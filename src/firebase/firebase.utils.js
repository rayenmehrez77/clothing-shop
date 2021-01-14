import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMHaEJcV33KAPrQISjcNt47NK8WCHkdWk",
  authDomain: "crwn-clothing-c09ed.firebaseapp.com",
  projectId: "crwn-clothing-c09ed",
  storageBucket: "crwn-clothing-c09ed.appspot.com",
  messagingSenderId: "823559169802",
  appId: "1:823559169802:web:fa21045d51f1a0ba657cf3",
  measurementId: "G-8EV1Z66K8B",
};

// Initialize the app
firebase.initializeApp(firebaseConfig);

// Exporting the authentication and the database (firestore)
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Authentication with google

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
