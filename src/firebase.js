<<<<<<< HEAD
// src/firebase.js
=======
// Importa lo necesario
>>>>>>> 314b3a9aa957754cea9e166f27f6d37d65f68aa7
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuración de tu app
const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyDSwUzZGvy7Ct1DpgV7y3ux-iET_F6PLm8",
 authDomain: "jpp3d-login.firebaseapp.com",
  projectId: "jpp3d-login",
  storageBucket: "jpp3d-login.appspot.com",
  messagingSenderId: "48989381352",
  appId: "1:48989381352:web:b4dc919f77561da190c9d",
  measurementId: "G-GHY93GGB8H"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
=======
  apiKey: "AIzaSyDswuZZgy7Ct1DpgV7y3ux-iET_F6PLm8",
    authDomain: "jpp3d-login.firebaseapp.com",
      projectId: "jpp3d-login",
        storageBucket: "jpp3d-login.appspot.com",
          messagingSenderId: "48998301352",
            appId: "1:48998301352:web:b4dc919f771561da190c9d"
            };

            // Inicializa Firebase
            const app = initializeApp(firebaseConfig);

            // Exporta autenticación y base de datos
            export const auth = getAuth(app);
            export const db = getFirestore(app);
                
>>>>>>> 314b3a9aa957754cea9e166f27f6d37d65f68aa7
