import { initializeApp } from "firebase/app"; // Importing Firebase app initialization function
import { getAuth } from "firebase/auth"; // Importing Firebase authentication service

const firebaseConfig = {
  apiKey: "AIzaSyC2LS8-cO8fzEVm3sXb6viUimF0XAKZnLY",
  authDomain: "fir-355eb.firebaseapp.com",
  projectId: "fir-355eb",
  storageBucket: "fir-355eb.appspot.com",
  messagingSenderId: "1036629171992",
  appId: "1:1036629171992:web:8b980d60b60d0b7bf6886d",
  measurementId: "G-K2T6ZST219"
};

// Initializing Firebase app with the provided configuration
const app = initializeApp(firebaseConfig);

// Getting the authentication service from the initialized Firebase app
export const auth = getAuth(app); // Exporting the authentication service for use in other parts of your app
