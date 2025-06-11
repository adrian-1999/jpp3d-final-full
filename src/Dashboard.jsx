import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
      <div className="min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">
            <Navbar />

                  <div className="flex flex-col items-center justify-center py-20 text-center">
                          <h1 className="text-4xl font-bold text-gray-800 mb-4">¡Bienvenido a tu Panel!</h1>
                                  <p className="text-lg text-gray-600 mb-8">
                                            Accede rápidamente a tus funciones principales:
                                                    </p>

                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                                      <Link
                                                                                  to="/pedido"
                                                                                              className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-2xl shadow-xl transition duration-300"
                                                                                                        >
                                                                                                                    Hacer Pedido
                                                                                                                              </Link>
                                                                                                                                        <Link
                                                                                                                                                    to="/historial"
                                                                                                                                                                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-2xl shadow-xl transition duration-300"
                                                                                                                                                                          >
                                                                                                                                                                                      Ver Historial
                                                                                                                                                                                                </Link>
                                                                                                                                                                                                        </div>
                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                    );
                                                                                                                                                                                                                    };

                                                                                                                                                                                                                    export default Dashboard;