import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Bienvenido al Panel de Control de JPP3D</h1>
      <p className="dashboard-description">
        Elige una opción para comenzar:
      </p>
      <div className="dashboard-buttons">
        <Link to="/pedido" className="dashboard-btn">Hacer Pedido</Link>
        <Link to="/historial" className="dashboard-btn">Ver Historial</Link>
      </div>
    </div>
  );
}

export default Dashboard;
