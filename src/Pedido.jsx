// src/Pedido.jsx
import React, { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

const Pedido = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "pedidos"), {
        nombre,
        correo,
        mensaje,
        fecha: new Date()
      });
      setEnviado(true);
      setNombre("");
      setCorreo("");
      setMensaje("");
    } catch (error) {
      console.error("Error al enviar el pedido:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        {enviado ? (
          <h2 className="text-center text-xl font-semibold text-green-600">
            ✅ ¡Tu pedido fue enviado con éxito!
          </h2>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Formulario de Pedido
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Tu correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
                className="w-full p-2 border rounded"
              />
              <textarea
                placeholder="Describe tu idea"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
                className="w-full p-2 border rounded"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
              >
                Enviar Pedido
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Pedido;
