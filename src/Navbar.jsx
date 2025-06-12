import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const Navbar = () => {
  const navigate = useNavigate();

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
