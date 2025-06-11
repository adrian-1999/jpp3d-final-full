import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash from "./Splash";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import Pedido from "./Pedido";
import Historial from "./Historial";
import Dashboard from "./Dashboard";

function App() {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
            return () => clearTimeout(timer);
              }, []);

                return (
                    <Router>
                          {loading ? (
                                  <Splash />
                                        ) : (
                                                <>
                                                          <Navbar />
                                                                    <Routes>
                                                                                <Route path="/login" element={<Login />} />
                                                                                            <Route path="/register" element={<Register />} />
                                                                                                        <Route path="/pedido" element={<Pedido />} />
                                                                                                                    <Route path="/historial" element={<Historial />} />
                                                                                                                                <Route path="/dashboard" element={<Dashboard />} />
                                                                                                                                          </Routes>
                                                                                                                                                  </>
                                                                                                                                                        )}
                                                                                                                                                            </Router>
                                                                                                                                                              );
                                                                                                                                                              }

                                                                                                                                                              export default App;