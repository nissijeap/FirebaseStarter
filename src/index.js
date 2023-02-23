// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm04T_eQj03QlOwl4TnYqi2VmVx_sBRH0",
  authDomain: "gettingstartedwithfireba-b914a.firebaseapp.com",
  projectId: "gettingstartedwithfireba-b914a",
  storageBucket: "gettingstartedwithfireba-b914a.appspot.com",
  messagingSenderId: "1062663251199",
  appId: "1:1062663251199:web:f6e328ed9e0b726ca258ca",
  measurementId: "G-79Y3E6MXMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)