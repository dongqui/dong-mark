import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection, getDoc, setDoc, serverTimestamp, getDocs, doc, updateDoc, query, where } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGIN_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_Id,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, addDoc, collection, getDoc, setDoc, serverTimestamp, getDocs, doc, updateDoc, query, where };
