import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDLR8AWA7h55ikRUpEs2CTMioB0mqI-EDM",
  authDomain: "portfolio-86923.firebaseapp.com",
  databaseURL: "https://portfolio-86923-default-rtdb.firebaseio.com",
  projectId: "portfolio-86923",
  storageBucket: "portfolio-86923.firebasestorage.app",
  messagingSenderId: "549369087706",
  appId: "1:549369087706:web:51c860aad3c323ed9547e3",
  measurementId: "G-YENGJCYKCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
