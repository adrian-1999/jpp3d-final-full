import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Splash from "./Splash";
import Login from "./Login";
import Register from "./Register";
import Pedido from "./Pedido";
import Historial from "./Historial";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Splash />;
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main className="p-4 text-center">
            <h1 className="text-3xl font-bold text-gray-800">¡Bienvenido a JPP3D!</h1>
            <p className="mt-4 text-gray-600">
              Tu idea al alcance: Diseños e impresiones 3D personalizadas.
            </p>
          </main>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pedido" element={<Pedido />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/" element={<Splash />} />
      </Routes>
    </Router>
  );
}

export default App;
