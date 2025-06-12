import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 text-white px-4">
              <img
                      src="/inicio-bg.png"
                              alt="Bienvenida"
                                      className="w-72 md:w-[420px] mb-6 rounded-xl shadow-lg"
                                            />

                                                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center drop-shadow-lg">
                                                          ¡Bienvenido a JPP3D!
                                                                </h1>

                                                                      <p className="text-lg md:text-xl mb-6 text-center max-w-xl">
                                                                              Transforma tu imaginación en realidad. Diseños e impresiones 3D personalizadas para todos tus proyectos.
                                                                                    </p>

                                                                                          <div className="flex gap-4">
                                                                                                  <button
                                                                                                            onClick={() => navigate("/login")}
                                                                                                                      className="bg-white text-indigo-600 font-bold px-6 py-2 rounded-full shadow-md hover:bg-indigo-100 transition"
                                                                                                                              >
                                                                                                                                        Iniciar Sesión
                                                                                                                                                </button>
                                                                                                                                                        <button
                                                                                                                                                                  onClick={() => navigate("/register")}
                                                                                                                                                                            className="bg-indigo-800 px-6 py-2 font-bold rounded-full shadow-md hover:bg-indigo-900 transition"
                                                                                                                                                                                    >
                                                                                                                                                                                              Registrarse
                                                                                                                                                                                                      </button>
                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                  );
                                                                                                                                                                                                                  };

                                                                                                                                                                                                                  export default HomePage;