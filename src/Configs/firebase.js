import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "firebase/auth";
import { getFirestore, doc,onSnapshot, setDoc, getDoc, addDoc, collection, getDocs, query,where } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyD8OBZWG7z2xDmwXWDjLb2jvomOfCPOSv8",
  authDomain: "food-app-task-fbae4.firebaseapp.com",
  projectId: "food-app-task-fbae4",
  storageBucket: "food-app-task-fbae4.appspot.com",
  messagingSenderId: "369905616972",
  appId: "1:369905616972:web:8e396be0bd51d13b1f0ce9",
  measurementId: "G-SC4CNR9YT8"
});

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();


export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,

  db,
  doc,
  setDoc,
  getDoc,
  addDoc,
  collection,
  getDocs,
  query,
  where,
  onSnapshot,

  storage,
  ref,
  getDownloadURL,
  uploadBytes 
};