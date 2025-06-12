import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
<<<<<<< HEAD
import soundFile from "./sonido.mp3"; // Asegúrate de haber subido este archivo a /src
=======
import soundFile from "./sonido.mp3";
>>>>>>> 314b3a9aa957754cea9e166f27f6d37d65f68aa7

const Splash = () => {
  const navigate = useNavigate();

<<<<<<< HEAD
  useEffect(() => {
    const audio = new Audio(soundFile);
    audio.play();
    
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient">
      <motion.img
        src={logo}
        alt="Logo"
        className="w-40 h-40 mb-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.p
        className="text-white text-lg font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Cargando JPP3D...
      </motion.p>
    </div>
  );
};

export default Splash;
=======
    useEffect(() => {
        const audio = new Audio(soundFile);
            audio.play();

                const timer = setTimeout(() => {
                      navigate("/login");
                          }, 3000);

                              return () => clearTimeout(timer);
                                }, [navigate]);

                                  return (
                                      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                                            <motion.img
                                                    src={logo}
                                                            alt="Logo"
                                                                    className="w-40 h-40 mb-6 animate-pulse"
                                                                            initial={{ opacity: 0, scale: 0.5 }}
                                                                                    animate={{ opacity: 1, scale: 1 }}
                                                                                            transition={{ duration: 1.5 }}
                                                                                                  />
                                                                                                        <motion.p
                                                                                                                className="text-white text-lg font-semibold"
                                                                                                                        initial={{ opacity: 0 }}
                                                                                                                                animate={{ opacity: 1 }}
                                                                                                                                        transition={{ delay: 1, duration: 1 }}
                                                                                                                                              >
                                                                                                                                                      Cargando JPP3D...
                                                                                                                                                            </motion.p>
                                                                                                                                                                </div>
                                                                                                                                                                  );
                                                                                                                                                                  };

                                                                                                                                                                  export default Splash;
>>>>>>> 314b3a9aa957754cea9e166f27f6d37d65f68aa7
