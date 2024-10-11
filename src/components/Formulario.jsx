import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './formulario.css'; 

const Formulario = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const mockUser = authenticateUser(username, password);

    if (mockUser) {
      onLogin(mockUser);
      if (mockUser.role === 'admin') {
        navigate('/admin');
      } else if (mockUser.role === 'adminzona') {
        navigate('/adminzona');
      }
    } else {
      alert('Credenciales inválidas');
    }
  };

  const authenticateUser = (username, password) => {
    if (username === 'admin' && password === 'admin123') {
      return { username: 'admin', role: 'admin' };
    } else if (username === 'zona' && password === 'zona123') {
      return { username: 'zona', role: 'adminzona' };
    }
    return null;
  };

  return (
    <div className="login-form">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Ingresa tu usuario"
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Ingresa tu contraseña"
          />
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Formulario;
