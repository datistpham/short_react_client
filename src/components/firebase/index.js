// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuWg7042WCnfKm4JV4nIuVhVQfOhoESnw",
  authDomain: "short-ccf94.firebaseapp.com",
  projectId: "short-ccf94",
  storageBucket: "short-ccf94.appspot.com",
  messagingSenderId: "330285456849",
  appId: "1:330285456849:web:5b5af125ff2bd2a179d4f0",
  measurementId: "G-18M2KTM394"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics }