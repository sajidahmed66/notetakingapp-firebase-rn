import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
import { getFirestore } from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDh_1OnZiDHVmmEUXNvpPti205URR0pU2I",
  authDomain: "myapprestaurent.firebaseapp.com",
  databaseURL: "https://myapprestaurent-default-rtdb.firebaseio.com",
  projectId: "myapprestaurent",
  storageBucket: "myapprestaurent.appspot.com",
  messagingSenderId: "148864728983",
  appId: "1:148864728983:web:2521f25f1e7f8072ed4ed2",
  measurementId: "G-TML3SF6LFY",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
