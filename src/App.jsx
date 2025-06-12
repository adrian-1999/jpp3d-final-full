// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Login";
import Register from "./Register";
import Pedido from "./Pedido";
import Historial from "./Historial";
import Dashboard from "./Dashboard";

function App() {
  return (
      <Router>
            <Routes>
                    <Route path="/" element={<LandingPage />} />
                            <Route path="/login" element={<Login />} />
                                    <Route path="/register" element={<Register />} />
                                            <Route path="/pedido" element={<Pedido />} />
                                                    <Route path="/historial" element={<Historial />} />
                                                            <Route path="/dashboard" element={<Dashboard />} />
                                                                  </Routes>
                                                                      </Router>
                                                                        );
                                                                        }

                                                                        export default App;