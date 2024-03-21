import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBONY0nhoVqtMcGoUvp5ZXgg6K713qFZiA",
  authDomain: "housing-marketplace-app-3ecee.firebaseapp.com",
  projectId: "housing-marketplace-app-3ecee",
  storageBucket: "housing-marketplace-app-3ecee.appspot.com",
  messagingSenderId: "177323543575",
  appId: "1:177323543575:web:df056852fd08e33e932052",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firestore instance
export const db = getFirestore(app);
