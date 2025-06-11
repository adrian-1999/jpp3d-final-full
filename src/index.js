import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./Login";
import Register from "./Register";
import Pedido from "./Pedido";
import Historial from "./Historial";
import LandingPage from "./LandingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
      <BrowserRouter>
            <Routes>
                    <Route path="/" element={<LandingPage />} />
                            <Route path="/login" element={<Login />} />
                                    <Route path="/register" element={<Register />} />
                                            <Route path="/pedido" element={<Pedido />} />
                                                    <Route path="/historial" element={<Historial />} />
                                                            <Route path="/dashboard" element={<App />} />
                                                                  </Routes>
                                                                      </BrowserRouter>
                                                                        </React.StrictMode>
                                                                        );