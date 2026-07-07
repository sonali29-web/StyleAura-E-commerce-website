
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0xAulZra32zuNgNUcEizEnn0suy5AeEY",
  authDomain: "e-comm-web-login.firebaseapp.com",
  projectId: "e-comm-web-login",
  storageBucket: "e-comm-web-login.firebasestorage.app",
  messagingSenderId: "607130159789",
  appId: "1:607130159789:web:065588bde3fb168e445424",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
