import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const Historial = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "pedidos"));
        const pedidosData = querySnapshot.docs.map((doc) => doc.data());
        setPedidos(pedidosData);
      } catch (error) {
        console.error("Error al obtener los pedidos:", error);
      }
    };

    fetchPedidos();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Historial de Pedidos</h2>
      {pedidos.length === 0 ? (
        <p>No hay pedidos registrados aún.</p>
      ) : (
        <ul className="space-y-4">
          {pedidos.map((pedido, index) => (
            <li key={index} className="p-4 border rounded shadow">
              <p><strong>Nombre:</strong> {pedido.nombre}</p>
              <p><strong>Correo:</strong> {pedido.correo}</p>
              <p><strong>Idea:</strong> {pedido.descripcion}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Historial;
