import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Splash from "./Splash";

function App() {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
            return () => clearTimeout(timer);
              }, []);

                return (
                    <>
                          {loading ? (
                                  <Splash />
                                        ) : (
                                                <div className="flex flex-col min-h-screen">
                                                          <Navbar />
                                                                    <main className="flex-grow p-4 text-center">
                                                                                <h1 className="text-3xl font-bold text-gray-800">¡Bienvenido a JPP3D!</h1>
                                                                                            <p className="mt-4 text-gray-600">
                                                                                                          Tu idea al alcance: Diseños e impresiones 3D personalizadas.
                                                                                                                      </p>
                                                                                                                                </main>
                                                                                                                                          <Footer />
                                                                                                                                                  </div>
                                                                                                                                                        )}
                                                                                                                                                            </>
                                                                                                                                                              );
                                                                                                                                                              }

                                                                                                                                                              export default App;