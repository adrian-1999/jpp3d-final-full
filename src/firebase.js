// Importa lo necesario
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuración de tu app
const firebaseConfig = {
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
                
