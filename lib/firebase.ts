import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDf5BNQrtYWGHxiZcF6ITUf9YIgtGOgNkU",
  authDomain: "apple-6d36d.firebaseapp.com",
  projectId: "apple-6d36d",
  storageBucket: "apple-6d36d.appspot.com",
  messagingSenderId: "595300765766",
  appId: "1:595300765766:web:5e92580fb12ec689cefa47",
  measurementId: "G-47KMDNSQND"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
