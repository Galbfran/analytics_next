'use client'
import { Analytics, getAnalytics, logEvent } from '@firebase/analytics';
import { initializeApp } from 'firebase/app';
import { useEffect, useRef } from 'react';

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
    const analyticsRef = useRef<Analytics | null>(null);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const app = initializeApp(firebaseConfig);
            const analytics = getAnalytics(app);
            analyticsRef.current = analytics;
        }
    }, []); 
        const handleButtonClick = () => {
            if (analyticsRef.current) {
                logEvent(analyticsRef.current, "button_click", { button_type: "start_button" });
            } else {
                console.error("Analytics is not available.");
            }
        };
        return (
            <div>

                <button
                    className="bg-orange-300 hover:bg-orange-500 active:bg-orange-700"
                    onClick={handleButtonClick}
                >
                    Inicia
                </button>
            </div>
        );
    } 


export default ButtonFirebase;

