import React from 'react';

function Pedido() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <form action="https://formspree.io/f/meokjdjj" method="POST" encType="multipart/form-data" className="bg-white p-6 rounded shadow-md w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-semibold text-center">Enviar Pedido</h2>

        <input type="text" name="nombre" placeholder="Tu nombre" className="w-full p-2 border rounded" required />
        <input type="email" name="correo" placeholder="Tu correo" className="w-full p-2 border rounded" required />
        <textarea name="descripcion" placeholder="Describe tu diseño o necesidad" className="w-full p-2 border rounded" rows="4" required></textarea>
        <input type="file" name="archivo" className="w-full p-2" accept=".stl,.jpg,.jpeg,.png" />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Enviar Pedido</button>
      </form>
    </div>
  );
}

export default Pedido;
