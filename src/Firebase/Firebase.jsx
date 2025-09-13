
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyANEvvtZemu6ogCki0yWXqv0wbZvOhjAbY",
  authDomain: "agrihub-f80d9.firebaseapp.com",
  projectId: "agrihub-f80d9",
  storageBucket: "agrihub-f80d9.firebasestorage.app",
  messagingSenderId: "375935727277",
  appId: "1:375935727277:web:eb6bc8d80be0829a253824",
  measurementId: "G-YBF2N1Z29R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);