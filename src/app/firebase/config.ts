// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAR55NDC__G-av6TIlfK-p9h4AAUFNCoxQ',
  authDomain: 'acc-portfolio-41c30.firebaseapp.com',
  projectId: 'acc-portfolio-41c30',
  storageBucket: 'acc-portfolio-41c30.appspot.com',
  messagingSenderId: '599263517336',
  appId: '1:599263517336:web:3b6efffa2828e4189dceed',
  measurementId: 'G-R526CR4FVY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
