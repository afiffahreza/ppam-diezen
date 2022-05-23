// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4LinMzTBupoywOB8MPvoEl5BINoUiHdw",
  authDomain: "ppam-diezen.firebaseapp.com",
  projectId: "ppam-diezen",
  storageBucket: "ppam-diezen.appspot.com",
  messagingSenderId: "491688459787",
  appId: "1:491688459787:web:b8bc79e5598cb97d0bd10e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
