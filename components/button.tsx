'use client'
import { getAnalytics, logEvent } from '@firebase/analytics';
import { initializeApp } from 'firebase/app';
// Importa las funciones necesarias de Firebase
import { useEffect } from 'react';
const firebaseConfig = {
    apiKey: "AIzaSyBhmYLq_eju6KnPFoUyCKdb-kOmqYQxYBA",
    authDomain: "practica-analitics.firebaseapp.com",
    projectId: "practica-analitics",
    storageBucket: "practica-analitics.appspot.com",
    messagingSenderId: "953800416520",
    appId: "1:953800416520:web:ad2583418fd21200f260bd",
    measurementId: "G-ME4XR8Q3E5"
  };

const ButtonFirebase = () => {
    const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
  const handleButtonClick = () => {
    // Agrega el evento de Firebase Analytics al hacer clic en el botón
    logEvent(analytics, "button_click", { button_type: "start_button" });
    console.log(logEvent)
  };



  return (
    <button
      className="bg-orange-300 hover:bg-orange-500 active:bg-orange-700"
      onClick={handleButtonClick}
    >
      Inicia
    </button>
  );
};

export default ButtonFirebase;
