import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCsyOKP2_Dy2xc_SPlC86t0HShAbQSllSg",
    authDomain: "marioplan-9efdd.firebaseapp.com",
    projectId: "marioplan-9efdd",
    storageBucket: "marioplan-9efdd.appspot.com",
    messagingSenderId: "451114663351",
    appId: "1:451114663351:web:e05ed9c94f8fa04d33fc32",
    measurementId: "G-9GXLNVCRBR"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth();

//https://travis.media/how-to-use-firebase-with-react/