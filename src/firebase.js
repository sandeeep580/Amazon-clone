import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWRLocIGYHFhN88-l3sHhh9uafma5uBQ4",
  authDomain: "clone-31b9c.firebaseapp.com",
  projectId: "clone-31b9c",
  storageBucket: "clone-31b9c.appspot.com",
  messagingSenderId: "204115570616",
  appId: "1:204115570616:web:3a72f8329f3c51e104294d",
  measurementId: "G-J94K5C2LV9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
