import { auth } from "./firebaseConfigure";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const ECommsignOut = () => {
  return signOut(auth);
};
