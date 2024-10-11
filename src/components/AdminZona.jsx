import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Inicio from './Inicio';
import Ventas from './Ventas';
import Vendedores from './Vendedores';
import Notificaciones from './Notificaciones';

import './formulario.css'; 
import { FaHome, FaShoppingCart, FaUsers, FaBell, FaUserPlus } from 'react-icons/fa';

const AdminZona = ({ onLogout }) => {
  const adminZonaLinks = [
    { label: 'Inicio', path: '', icon: FaHome, end: true },
    { label: 'Ventas', path: 'ventas', icon: FaShoppingCart },
    { label: 'Vendedores', path: 'vendedores', icon: FaUsers },
    { label: 'Notificaciones', path: 'notificaciones', icon: FaBell },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar nombre="Administrador de Zona" links={adminZonaLinks} />
      <div className="dashboard-content">
        <header>
          <button onClick={onLogout} className="logout-button">
            Cerrar Sesión
          </button>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="ventas" element={<Ventas />} />
            <Route path="vendedores" element={<Vendedores />} />
            <Route path="notificaciones" element={<Notificaciones />} />
           
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminZona;
