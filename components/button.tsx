'use client'
import { getAnalytics, logEvent } from '@firebase/analytics';
import { initializeApp } from 'firebase/app';

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
    if (typeof window !== 'undefined') {
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const handleButtonClick = () => {
            logEvent(analytics, "button_click", { button_type: "start_button" });
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
    } else {
        return (
            <div>
                Este componente solo es compatible con entornos de navegador.
            </div>
        );
    }
};

export default ButtonFirebase;

