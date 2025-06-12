// src/LandingPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LandingPage = () => {
  const navigate = useNavigate();

    return (
        <div className="landing-container">
              <Navbar />
                    <div className="landing-content">
                            <img
                                      src="/landing.jpg"
                                                alt="Diseño 3D"
                                                          className="landing-image"
                                                                  />
                                                                          <div className="landing-text">
                                                                                    <h1>Bienvenido a JPP3D</h1>
                                                                                              <p>¡Haz realidad tus ideas con impresión 3D profesional!</p>
                                                                                                        <div className="landing-buttons">
                                                                                                                    <button onClick={() => navigate("/login")}>Iniciar sesión</button>
                                                                                                                                <button onClick={() => navigate("/register")}>Registrarse</button>
                                                                                                                                          </div>
                                                                                                                                                  </div>
                                                                                                                                                        </div>
                                                                                                                                                              <Footer />
                                                                                                                                                                  </div>
                                                                                                                                                                    );
                                                                                                                                                                    };

                                                                                                                                                                    export default LandingPage;