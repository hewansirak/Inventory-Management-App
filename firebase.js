// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8FZePYcsO-ZRyc96wzFVEx4OXX0fJ9wk",
  authDomain: "inventory-management-app-1312b.firebaseapp.com",
  projectId: "inventory-management-app-1312b",
  storageBucket: "inventory-management-app-1312b.appspot.com",
  messagingSenderId: "638896898688",
  appId: "1:638896898688:web:bd8454606b618eba481c65",
  measurementId: "G-0GRG4T58V8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);