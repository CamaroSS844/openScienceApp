// Import the functions you need from the SDKs you need
import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import  Constants  from "expo-constants";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp8wVCZPWrkR2ag9oPW4MS-fgjMhJJfpU",
  authDomain: "open-science-app.firebaseapp.com",
  projectId: "open-science-app",
  storageBucket: "open-science-app.appspot.com",
  messagingSenderId: "629385220466",
  appId: "1:629385220466:web:b41fbaed3625998e5d4deb",
  measurementId: "G-2YK0VFQPKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const database = getFirestore();