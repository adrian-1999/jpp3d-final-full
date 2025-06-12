import React, { useEffect, useState } from "react";
import { db } from "./firebase";
<<<<<<< HEAD
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
=======
import { collection, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { motion } from "framer-motion";

const Historial = () => {
  const [pedidos, setPedidos] = useState([]);
    const [usuario, setUsuario] = useState(null);

      useEffect(() => {
          const auth = getAuth();
              const unsubscribe = onAuthStateChanged(auth, async (user) => {
                    if (user) {
                            setUsuario(user);
                                    const pedidosRef = collection(db, "pedidos");
                                            const q = query(pedidosRef, where("usuario", "==", user.email));
                                                    const querySnapshot = await getDocs(q);

                                                            const listaPedidos = [];
                                                                    querySnapshot.forEach((doc) => {
                                                                              listaPedidos.push({ id: doc.id, ...doc.data() });
                                                                                      });

                                                                                              setPedidos(listaPedidos);
                                                                                                    } else {
                                                                                                            setUsuario(null);
                                                                                                                  }
                                                                                                                      });

                                                                                                                          return () => unsubscribe();
                                                                                                                            }, []);

                                                                                                                              return (
                                                                                                                                  <motion.div
                                                                                                                                        className="p-6 bg-white rounded-xl shadow-md m-4"
                                                                                                                                              initial={{ opacity: 0 }}
                                                                                                                                                    animate={{ opacity: 1 }}
                                                                                                                                                        >
                                                                                                                                                              <h2 className="text-2xl font-bold mb-4 text-center">Historial de Pedidos</h2>

                                                                                                                                                                    {usuario ? (
                                                                                                                                                                            pedidos.length > 0 ? (
                                                                                                                                                                                      <div className="overflow-x-auto">
                                                                                                                                                                                                  <table className="table-auto w-full border border-gray-300">
                                                                                                                                                                                                                <thead>
                                                                                                                                                                                                                                <tr className="bg-gray-100 text-gray-700">
                                                                                                                                                                                                                                                  <th className="p-2 border">Fecha</th>
                                                                                                                                                                                                                                                                    <th className="p-2 border">Nombre</th>
                                                                                                                                                                                                                                                                                      <th className="p-2 border">Material</th>
                                                                                                                                                                                                                                                                                                        <th className="p-2 border">Tamaño</th>
                                                                                                                                                                                                                                                                                                                          <th className="p-2 border">Notas</th>
                                                                                                                                                                                                                                                                                                                                          </tr>
                                                                                                                                                                                                                                                                                                                                                        </thead>
                                                                                                                                                                                                                                                                                                                                                                      <tbody>
                                                                                                                                                                                                                                                                                                                                                                                      {pedidos.map((pedido) => (
                                                                                                                                                                                                                                                                                                                                                                                                        <tr key={pedido.id} className="text-center">
                                                                                                                                                                                                                                                                                                                                                                                                                            <td className="p-2 border">{pedido.fecha}</td>
                                                                                                                                                                                                                                                                                                                                                                                                                                                <td className="p-2 border">{pedido.nombre}</td>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <td className="p-2 border">{pedido.material}</td>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <td className="p-2 border">{pedido.tamano}</td>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            <td className="p-2 border">{pedido.notas}</td>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </tr>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ))}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </tbody>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </table>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ) : (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <p className="text-center text-gray-600">No se encontraron pedidos aún.</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            )
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ) : (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          <p className="text-center text-red-500">Por favor inicia sesión para ver tu historial.</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                )}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </motion.div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      };

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      export default Historial;
>>>>>>> 314b3a9aa957754cea9e166f27f6d37d65f68aa7
