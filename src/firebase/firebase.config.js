import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAbxjOW-qjq59F66OnxlXPtKqcD2V_UQ0Q",
  authDomain: "job-tracker-78ec8.firebaseapp.com",
  projectId: "job-tracker-78ec8",
  storageBucket: "job-tracker-78ec8.firebasestorage.app",
  messagingSenderId: "138498973916",
  appId: "1:138498973916:web:3e33f714a4f55c828dd419",
  measurementId: "G-PPKXXE6DBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;