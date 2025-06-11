import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Dashboard = () => {
  const navigate = useNavigate();

    const handleVerHistorial = () => {
        navigate("/historial");
          };

            const handleNuevoPedido = () => {
                navigate("/pedido");
                  };

                    return (
                        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center">
                              <Navbar />
                                    <div className="text-center mt-20 p-4">
                                            <h1 className="text-4xl font-bold text-gray-800 mb-2">Bienvenido a tu panel</h1>
                                                    <p className="text-gray-600 text-lg">Selecciona una opción para comenzar</p>

                                                            <div className="mt-10 flex flex-col gap-4 items-center">
                                                                      <button
                                                                                  onClick={handleVerHistorial}
                                                                                              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl shadow-lg text-lg"
                                                                                                        >
                                                                                                                    Ver Historial de Pedidos
                                                                                                                              </button>
                                                                                                                                        <button
                                                                                                                                                    onClick={handleNuevoPedido}
                                                                                                                                                                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg text-lg"
                                                                                                                                                                          >
                                                                                                                                                                                      Hacer un nuevo pedido
                                                                                                                                                                                                </button>
                                                                                                                                                                                                        </div>
                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                    );
                                                                                                                                                                                                                    };

                                                                                                                                                                                                                    export default Dashboard;