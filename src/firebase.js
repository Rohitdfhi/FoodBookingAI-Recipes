import { initializeApp } from "firebase/app"; // Importing Firebase app initialization function
import { getAuth } from "firebase/auth"; // Importing Firebase authentication service

// Firebase configuration object containing keys and identifiers for your app
// const firebaseConfig = {
//   apiKey: "AIzaSyD1F6lbyRDeejP8wJY-wrYCwfY3cQ4jIxU",
//   authDomain: "food-app-a9263.firebaseapp.com", 
//   projectId: "food-app-a9263",
//   storageBucket: "food-app-a9263.appspot.com", 
//   messagingSenderId: "424971672222", 
//   appId: "1:424971672222:web:a211848c895c01bd7e398f", 
//   measurementId: "G-HDDV01BVD8" 
// };
const firebaseConfig = {
  apiKey: "AIzaSyBj9ft2MRh52-cWiDRYy78rgsuQTsZv6Tg",
  authDomain: "food-booking-d4475.firebaseapp.com",
  projectId: "food-booking-d4475",
  storageBucket: "food-booking-d4475.appspot.com",
  messagingSenderId: "118150378331",
  appId: "1:118150378331:web:24f92bf2e2378c19bfa07e"
};

// Initializing Firebase app with the provided configuration
const app = initializeApp(firebaseConfig);

// Getting the authentication service from the initialized Firebase app
export const auth = getAuth(app); // Exporting the authentication service for use in other parts of your app
