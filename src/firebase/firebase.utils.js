import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDMHaEJcV33KAPrQISjcNt47NK8WCHkdWk",
  authDomain: "crwn-clothing-c09ed.firebaseapp.com",
  projectId: "crwn-clothing-c09ed",
  storageBucket: "crwn-clothing-c09ed.appspot.com",
  messagingSenderId: "823559169802",
  appId: "1:823559169802:web:fa21045d51f1a0ba657cf3",
  measurementId: "G-8EV1Z66K8B",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;

    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }

    return userRef;
  }
};

// Initialize the app
firebase.initializeApp(config);

// Exporting the authentication and the database (firestore)
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Authentication with google

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
