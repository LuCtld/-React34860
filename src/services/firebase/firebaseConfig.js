import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD11JSsyeVLXwlP0qzaaqfhlHjh1T2EWwQ",
  authDomain: "backend34860-a9020.firebaseapp.com",
  projectId: "backend34860-a9020",
  storageBucket: "backend34860-a9020.appspot.com",
  messagingSenderId: "44970731982",
  appId: "1:44970731982:web:ce06feddfe55fbbabb639f"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);