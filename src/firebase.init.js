// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJhBy6lP8xtszVrPAO5S7q72VTqE1kHmo",
  authDomain: "ali-azman-photography.firebaseapp.com",
  projectId: "ali-azman-photography",
  storageBucket: "ali-azman-photography.appspot.com",
  messagingSenderId: "768958124931",
  appId: "1:768958124931:web:5af1e13aa3cb00568b1cb6",
  measurementId: "G-XX7WE0G3JG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;