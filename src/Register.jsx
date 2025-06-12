// ✅ Register.jsx (completo y actualizado) import React, { useState } from "react"; import { createUserWithEmailAndPassword } from "firebase/auth"; import { auth } from "./firebase"; import { useNavigate } from "react-router-dom"; import "./Register.css";

const Register = () => { const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const [error, setError] = useState(""); const navigate = useNavigate();

const handleRegister = async (e) => { e.preventDefault(); setError(""); try { await createUserWithEmailAndPassword(auth, email, password); navigate("/dashboard"); } catch (error) { setError("Error al crear la cuenta. Intenta con otro correo."); } };

return ( <div className="register-container"> <form onSubmit={handleRegister} className="register-form"> <h2>Crear Cuenta</h2> <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required /> <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required /> <button type="submit">Registrarse</button> {error && <p className="error">{error}</p>} <p onClick={() => navigate("/login")}>¿Ya tienes cuenta? Inicia sesión</p> </form> </div> ); };

export default Register;

