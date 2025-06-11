import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

    return (
        <div className="h-screen bg-cover bg-center flex flex-col items-center justify-center px-4" style={{ backgroundImage: "url('/fondo-landing.png')" }}>
              <div className="bg-white bg-opacity-80 rounded-2xl p-8 shadow-xl text-center max-w-md w-full">
                      <h1 className="text-3xl font-bold text-indigo-700 mb-4">Bienvenido a JPP3D</h1>
                              <p className="text-gray-700 mb-6">
                                        Tu idea al alcance. Diseñamos e imprimimos tus proyectos en 3D con precisión y creatividad.
                                                </p>
                                                        <div className="flex flex-col gap-4">
                                                                  <button
                                                                              onClick={() => navigate("/pedido")}
                                                                                          className="bg-indigo-600 text-white py-2 px-4 rounded-xl shadow hover:bg-indigo-700 transition"
                                                                                                    >
                                                                                                                Realizar un Pedido
                                                                                                                          </button>
                                                                                                                                    <button
                                                                                                                                                onClick={() => navigate("/historial")}
                                                                                                                                                            className="bg-purple-600 text-white py-2 px-4 rounded-xl shadow hover:bg-purple-700 transition"
                                                                                                                                                                      >
                                                                                                                                                                                  Ver Historial
                                                                                                                                                                                            </button>
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                          </div>
                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                );
                                                                                                                                                                                                                };

                                                                                                                                                                                                                export default LandingPage;