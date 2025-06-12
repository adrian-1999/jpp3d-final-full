import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Puedes agregar lógica para cerrar sesión aquí
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between bg-white shadow px-6 py-4">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <span className="text-xl font-bold text-purple-700">JPP3D</span>
      </div>
      <div className="flex gap-4">
        <Link to="/" className="text-gray-800 hover:text-purple-700">Inicio</Link>
        <Link to="/pedido" className="text-gray-800 hover:text-purple-700">Hacer Pedido</Link>
        <Link to="/historial" className="text-gray-800 hover:text-purple-700">Historial</Link>
        <button
          onClick={handleLogout}
          className="text-red-500 hover:text-red-700 font-medium"
        >
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};

export default Navbar;