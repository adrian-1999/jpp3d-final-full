import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "./logo.png";
import soundFile from "./sonido.mp3";

const Splash = () => {
  const navigate = useNavigate();

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