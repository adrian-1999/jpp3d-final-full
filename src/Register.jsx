<<<<<<< HEAD
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Por favor llena todos los campos.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/pedido"); // Redirige al formulario luego de registrarse
    } catch (err) {
      setError("Error al crear la cuenta. Intenta con otro correo.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 to-yellow-500">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Crear una Cuenta
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="mt-1 w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="correo@ejemplo.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              className="mt-1 w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded-xl hover:bg-pink-700 transition"
          >
            Registrarse
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-600">
          ¿Ya tienes una cuenta?{" "}
          <span
            className="text-pink-600 hover:underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Iniciar Sesión
          </span>
        </p>
      </div>
    </div>
  );
};
=======
// ✅ Register.jsx (completo y actualizado) import React, { useState } from "react"; import { createUserWithEmailAndPassword } from "firebase/auth"; import { auth } from "./firebase"; import { useNavigate } from "react-router-dom"; import "./Register.css";

const Register = () => { const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const [error, setError] = useState(""); const navigate = useNavigate();

const handleRegister = async (e) => { e.preventDefault(); setError(""); try { await createUserWithEmailAndPassword(auth, email, password); navigate("/dashboard"); } catch (error) { setError("Error al crear la cuenta. Intenta con otro correo."); } };

return ( <div className="register-container"> <form onSubmit={handleRegister} className="register-form"> <h2>Crear Cuenta</h2> <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required /> <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required /> <button type="submit">Registrarse</button> {error && <p className="error">{error}</p>} <p onClick={() => navigate("/login")}>¿Ya tienes cuenta? Inicia sesión</p> </form> </div> ); };
>>>>>>> 314b3a9aa957754cea9e166f27f6d37d65f68aa7

export default Register;

