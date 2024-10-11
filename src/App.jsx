
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';
import AdminZona from './components/AdminZona';
import './app.css'; 

function App() {
  const [user, setUser] = useState(null); 

  // Función para manejar el inicio de sesión
  const handleLogin = (userData) => {
    setUser(userData);
  };

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onLogin={handleLogin} />} />
        <Route
          path="/admin/*"
          element={
            user && user.role === 'admin' ? (
              <Admin onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/adminzona/*"
          element={
            user && user.role === 'adminzona' ? (
              <AdminZona onLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        {/* Ruta por defecto en caso de rutas no encontradas */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
