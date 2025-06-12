// src/App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Login";
import Register from "./Register";
import Pedido from "./Pedido";
import Historial from "./Historial";
import Dashboard from "./Dashboard";
import Splash from "./Splash";
import Welcome from "./Welcome";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Router>
      {loading ? (
        <Splash />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/pedido" element={<Pedido />} />
            <Route path="/historial" element={<Historial />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
