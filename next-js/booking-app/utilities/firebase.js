// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getfireStore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpQ9txKhaa3NNtF7n4Ci9txa4rYHOUGUo",
  authDomain: "booking-app-d29c8.firebaseapp.com",
  projectId: "booking-app-d29c8",
  storageBucket: "booking-app-d29c8.firebasestorage.app",
  messagingSenderId: "279889545363",
  appId: "1:279889545363:web:3cc099caf8f66f276aa566",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
