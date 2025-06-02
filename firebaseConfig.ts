import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACAYj3EhQHMEleUzZyIVqXQt3Di1Z_UMw",
  authDomain: "roscabackend.firebaseapp.com",
  projectId: "roscabackend",
  storageBucket: "roscabackend.firebasestorage.app",
  messagingSenderId: "959995047172",
  appId: "1:959995047172:web:0bf7770fc767ae661cf451",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
