import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4zFIT8Ps4pVX4JWIrQk12uiT-B89eS2o",
  authDomain: "mucahityigit-56109.firebaseapp.com",
  projectId: "mucahityigit-56109",
  storageBucket: "mucahityigit-56109.appspot.com",
  messagingSenderId: "550014461740",
  appId: "1:550014461740:web:3ac2eb0014500d55c0ae89",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();
export { app, db, auth, storage };
