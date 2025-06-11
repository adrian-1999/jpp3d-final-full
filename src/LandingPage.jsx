import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

const LandingPage = () => {
  const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth)
              .then(() => {
                      navigate("/login");
                            })
                                  .catch((error) => {
                                          console.error("Error al cerrar sesión:", error);
                                                });
                                                  };

                                                    return (
                                                        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 flex flex-col items-center justify-center text-white p-6">
                                                              <h1 className="text-4xl font-bold mb-2">¡Bienvenido a JPP3D!</h1>
                                                                    <p className="mb-6 text-lg text-center">
                                                                            Tu idea al alcance: diseños e impresiones 3D personalizadas
                                                                                  </p>

                                                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
                                                                                                <button
                                                                                                          className="bg-white text-purple-700 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-100 transition"
                                                                                                                    onClick={() => navigate("/pedido")}
                                                                                                                            >
                                                                                                                                      Hacer Pedido
                                                                                                                                              </button>

                                                                                                                                                      <button
                                                                                                                                                                className="bg-white text-purple-700 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-100 transition"
                                                                                                                                                                          onClick={() => navigate("/historial")}
                                                                                                                                                                                  >
                                                                                                                                                                                            Ver Historial
                                                                                                                                                                                                    </button>

                                                                                                                                                                                                            <button
                                                                                                                                                                                                                      className="col-span-1 sm:col-span-2 bg-white text-red-600 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-100 transition"
                                                                                                                                                                                                                                onClick={handleLogout}
                                                                                                                                                                                                                                        >
                                                                                                                                                                                                                                                  Cerrar Sesión
                                                                                                                                                                                                                                                          </button>
                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                      };

                                                                                                                                                                                                                                                                      export default LandingPage;