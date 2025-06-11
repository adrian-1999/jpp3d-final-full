import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">JPP3D</h1>
                  <ul className="flex gap-4">
                          <li><Link to="/dashboard" className="hover:text-yellow-300">Inicio</Link></li>
                                  <li><Link to="/pedido" className="hover:text-yellow-300">Hacer Pedido</Link></li>
                                          <li><Link to="/historial" className="hover:text-yellow-300">Historial</Link></li>
                                                  <li><Link to="/login" className="hover:text-yellow-300">Salir</Link></li>
                                                        </ul>
                                                            </nav>
                                                              );
                                                              };

                                                              export default Navbar;