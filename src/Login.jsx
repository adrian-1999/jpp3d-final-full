<<<<<<< HEAD
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Por favor llena todos los campos.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/pedido"); // redirige al formulario si el login es correcto
    } catch (err) {
      setError("Correo o contraseña incorrectos.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-700">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Iniciar Sesión
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="mt-1 w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
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
              className="mt-1 w-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
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
            className="w-full bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition"
          >
            Entrar
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-600">
          ¿No tienes una cuenta?{" "}
          <span
            className="text-purple-600 hover:underline cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Regístrate
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
=======
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
      const [error, setError] = useState('');
        const navigate = useNavigate();

          const handleLogin = async (e) => {
              e.preventDefault();
                  try {
                        await signInWithEmailAndPassword(auth, email, password);
                              navigate('/dashboard');
                                  } catch (error) {
                                        setError('Correo o contraseña incorrectos.');
                                            }
                                              };

                                                return (
                                                    <div
                                                          className="min-h-screen flex items-center justify-center bg-cover bg-center"
                                                                style={{ backgroundImage: `url('/login-bg.jpg')` }}
                                                                    >
                                                                          <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-sm w-full">
                                                                                  <h2 className="text-2xl font-bold text-center mb-4">Iniciar Sesión</h2>
                                                                                          <form onSubmit={handleLogin}>
                                                                                                    <input
                                                                                                                type="email"
                                                                                                                            placeholder="Correo electrónico"
                                                                                                                                        value={email}
                                                                                                                                                    onChange={(e) => setEmail(e.target.value)}
                                                                                                                                                                className="w-full p-2 mb-4 border rounded"
                                                                                                                                                                            required
                                                                                                                                                                                      />
                                                                                                                                                                                                <input
                                                                                                                                                                                                            type="password"
                                                                                                                                                                                                                        placeholder="Contraseña"
                                                                                                                                                                                                                                    value={password}
                                                                                                                                                                                                                                                onChange={(e) => setPassword(e.target.value)}
                                                                                                                                                                                                                                                            className="w-full p-2 mb-4 border rounded"
                                                                                                                                                                                                                                                                        required
                                                                                                                                                                                                                                                                                  />
                                                                                                                                                                                                                                                                                            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                                                                                                                                                                                                                                                                                                      <button
                                                                                                                                                                                                                                                                                                                  type="submit"
                                                                                                                                                                                                                                                                                                                              className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700"
                                                                                                                                                                                                                                                                                                                                        >
                                                                                                                                                                                                                                                                                                                                                    Entrar
                                                                                                                                                                                                                                                                                                                                                              </button>
                                                                                                                                                                                                                                                                                                                                                                      </form>
                                                                                                                                                                                                                                                                                                                                                                              <p className="mt-4 text-sm text-center">
                                                                                                                                                                                                                                                                                                                                                                                        ¿No tienes cuenta?{' '}
                                                                                                                                                                                                                                                                                                                                                                                                  <span
                                                                                                                                                                                                                                                                                                                                                                                                              onClick={() => navigate('/register')}
                                                                                                                                                                                                                                                                                                                                                                                                                          className="text-purple-700 font-semibold cursor-pointer hover:underline"
                                                                                                                                                                                                                                                                                                                                                                                                                                    >
                                                                                                                                                                                                                                                                                                                                                                                                                                                Regístrate
                                                                                                                                                                                                                                                                                                                                                                                                                                                          </span>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                              export default Login;
>>>>>>> 314b3a9aa957754cea9e166f27f6d37d65f68aa7
