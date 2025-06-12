import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a JPP3D</h1>
      <p className="mb-6 text-lg">Tu idea al alcance. ¿Qué deseas hacer?</p>
      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          Iniciar Sesión
        </Link>
        <Link
          to="/register"
          className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
        >
          Registrarse
        </Link>
        <Link
          to="/pedido"
          className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
        >
          Hacer un Pedido
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
