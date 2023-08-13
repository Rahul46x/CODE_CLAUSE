import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvqmoUsq2uoK6gPKIrEpqGv1bnxun1f1E",
  authDomain: "interntask-auth.firebaseapp.com",
  projectId: "interntask-auth",
  storageBucket: "interntask-auth.appspot.com",
  messagingSenderId: "976452119821",
  appId: "1:976452119821:web:0179cac578673b7e27d444",
  measurementId: "G-FYJ2DS4W2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);