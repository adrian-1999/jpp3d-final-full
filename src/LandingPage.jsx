import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
            <img
                    src="/landing-banner.png"
                            alt="Banner JPP3D"
                                    className="w-full max-w-4xl mb-8 rounded-lg shadow-xl"
                                          />
                                                <h1 className="text-4xl font-bold mb-4">Bienvenido a JPP3D</h1>
                                                      <p className="text-lg text-center max-w-xl mb-6">
                                                              Tu idea al alcance: Diseños e impresiones 3D personalizadas con calidad y estilo.
                                                                    </p>
                                                                          <div className="flex space-x-4">
                                                                                  <Link to="/login">
                                                                                            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg">
                                                                                                        Iniciar sesión
                                                                                                                  </button>
                                                                                                                          </Link>
                                                                                                                                  <Link to="/register">
                                                                                                                                            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-lg">
                                                                                                                                                        Registrarse
                                                                                                                                                                  </button>
                                                                                                                                                                          </Link>
                                                                                                                                                                                </div>
                                                                                                                                                                                    </div>
                                                                                                                                                                                      );
                                                                                                                                                                                      };

                                                                                                                                                                                      export default LandingPage;