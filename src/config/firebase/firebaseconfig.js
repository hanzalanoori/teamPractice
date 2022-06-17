import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

 //Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDk6AEqVJKEd241oQb8G4KntfArs6dI0k8",
   authDomain: "team-practice-2315d.firebaseapp.com",
   projectId: "team-practice-2315d",
   storageBucket: "team-practice-2315d.appspot.com",
   messagingSenderId: "162803458585",
   appId: "1:162803458585:web:222c56d9a5c992559bc088",
   measurementId: "G-J8B33B68FW",
 };

// const firebaseConfig = {
//   apiKey: "AIzaSyB7frIqS2RecIFxa3QLvYD5H90qAoQ8FaM",
//   authDomain: "fir-auth-5a67b.firebaseapp.com",
//   databaseURL: "https://fir-auth-5a67b-default-rtdb.firebaseio.com",
//   projectId: "fir-auth-5a67b",
//   storageBucket: "fir-auth-5a67b.appspot.com",
//   messagingSenderId: "686107183908",
//   appId: "1:686107183908:web:3fbf7ed09390951ad141b1"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
