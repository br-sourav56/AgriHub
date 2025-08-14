
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDBP8kjMY96ZWwhRM24LyDemyJxppetkX8",
  authDomain: "agrihub-54e1f.firebaseapp.com",
  projectId: "agrihub-54e1f",
  storageBucket: "agrihub-54e1f.firebasestorage.app",
  messagingSenderId: "557631342206",
  appId: "1:557631342206:web:8f464eab80a0ea07713a2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);