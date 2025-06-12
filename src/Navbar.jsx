import React from "react";
import { Link, useNavigate } from "react-router-dom";
<<<<<<< HEAD
import logo from "./logo.png";
=======
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
>>>>>>> 314b3a9aa957754cea9e166f27f6d37d65f68aa7

const Navbar = () => {
  const navigate = useNavigate();

<<<<<<< HEAD
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
=======
    const handleLogout = async () => {
        await signOut(auth);
            navigate("/login");
              };

                return (
                    <nav className="flex items-center justify-between bg-gradient-to-r from-purple-600 to-pink-500 p-4 text-white shadow-lg">
                          <Link to="/" className="text-xl font-bold tracking-wide">JPP3D</Link>
                                <div className="space-x-4">
                                        <Link to="/" className="hover:underline">Inicio</Link>
                                                <Link to="/pedido" className="hover:underline">Pedido</Link>
                                                        <Link to="/historial" className="hover:underline">Historial</Link>
                                                                <button onClick={handleLogout} className="bg-white text-purple-600 px-3 py-1 rounded hover:bg-gray-200 transition">Cerrar sesión</button>
                                                                      </div>
                                                                          </nav>
                                                                            );
                                                                            };

                                                                            export default Navbar;
>>>>>>> 314b3a9aa957754cea9e166f27f6d37d65f68aa7
