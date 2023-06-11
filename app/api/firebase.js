// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO0rpz5EUoj-LpAZy3YNODk_-6bshhhnY",
  authDomain: "joanna-react-shoppy.firebaseapp.com",
  databaseURL: "https://joanna-react-shoppy-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "joanna-react-shoppy",
  storageBucket: "joanna-react-shoppy.appspot.com",
  messagingSenderId: "812437662776",
  appId: "1:812437662776:web:e7f1337ecd6ec8c06ecacd",
  measurementId: "G-KPVGWCVDNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);