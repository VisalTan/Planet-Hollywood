// plugins/firebase.client.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'


export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyDGXzH6p9kbZVN8_lBVH2E1Z9l59Y7bmWM",
    authDomain: "angel-boss.firebaseapp.com",
    projectId: "angel-boss",
    storageBucket: "angel-boss.firebasestorage.app",
    messagingSenderId: "193092465417",
    appId: "1:193092465417:web:4b8d8db2ab8d0f23c699d8",
    measurementId: "G-XK0T59RGP3"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const storage = getStorage(app);

  return {
    provide: {
      firebase: {
        app,
        db,
        auth,
        storage
      }
    }
  };
});
