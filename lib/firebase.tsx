'use client'
import { ReactNode, useEffect } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhmYLq_eju6KnPFoUyCKdb-kOmqYQxYBA",
  authDomain: "practica-analitics.firebaseapp.com",
  projectId: "practica-analitics",
  storageBucket: "practica-analitics.appspot.com",
  messagingSenderId: "953800416520",
  appId: "1:953800416520:web:ad2583418fd21200f260bd",
  measurementId: "G-ME4XR8Q3E5"
};

// Initialize Firebase


export const FirebaseProvider = ({ children } : any) => {
  useEffect(() => {
    const handleAnalyticsInitialization = async () => {
      if (await isSupported()) {
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        // ... Tus eventos de Firebase Analytics aquí
      } else {
        console.warn("Firebase Analytics no está disponible en este entorno");
      }
    };
    
    // Call the async function immediately
    handleAnalyticsInitialization();
  }, []);
  
   

  return <>{children}</>;
};
