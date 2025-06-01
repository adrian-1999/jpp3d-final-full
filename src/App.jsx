import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">Tu idea al alcance</h1>
      <p className="mb-4">Pequeñas piezas para un gran futuro</p>
      <nav className="space-x-4">
        <Link to="/login" className="text-blue-400 hover:underline">Iniciar sesión</Link>
        <Link to="/register" className="text-blue-400 hover:underline">Registrarse</Link>
        <Link to="/pedido" className="text-blue-400 hover:underline">Hacer Pedido</Link>
      </nav>
    </div>
  );
}

export default App;
