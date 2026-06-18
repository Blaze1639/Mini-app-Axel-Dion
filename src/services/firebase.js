import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCF15vtG3HrqwBxqOucJqqY3qGwAdoBo0",
  authDomain: "mini-app-75658.firebaseapp.com",
  projectId: "mini-app-75658",
  storageBucket: "mini-app-75658.firebasestorage.app",
  messagingSenderId: "871898765450",
  appId: "1:871898765450:web:18252f9925414ee8d3b573",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);