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
      <div
        className="landing-content"
        style={{
          backgroundImage: "url('/landing-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h1 className="text-5xl font-bold mb-4">Bienvenido a JPP3D</h1>
        <p className="mb-6 text-lg">
          ¡Haz realidad tus ideas con impresión 3D profesional!
        </p>
        <div className="space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-purple-700 px-6 py-2 rounded shadow hover:bg-purple-100"
          >
            Iniciar sesión
          </button>
          <button
            onClick={() => navigate("/register")}
            className="bg-white text-purple-700 px-6 py-2 rounded shadow hover:bg-purple-100"
          >
            Registrarse
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
