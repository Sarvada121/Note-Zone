import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3FNhV2FZbgo4cmakJZJu5p3UNVdwotkE",
  authDomain: "notes-1a304.firebaseapp.com",
  projectId: "notes-1a304",
  storageBucket: "notes-1a304.appspot.com",
  messagingSenderId: "334213771230",
  appId: "1:334213771230:web:026fec380d39e48d9bf74f",
  measurementId: "G-8LY5QNT6GK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage();
const db = getFirestore();

const notesRef = collection(db, "notes");

export { app, auth, storage, db, notesRef };
