
import React, { useState } from 'react';
import './formulario.css'; 

const CrearUsuarios = () => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [zona, setZona] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
   
    const nuevoUsuario = {
      nombre,
      telefono,
      zona,
      usuario,
      contraseña,
      role: 'adminzona', 
    };
    console.log('Creando usuario:', nuevoUsuario);

    setNombre('');
    setTelefono('');
    setZona('');
    setUsuario('');
    setContraseña('');
  };

  return (
    <div className="crear-usuarios-form">
      <h2>Crear Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            placeholder="Ingresa el nombre"
          />
        </div>
        <div>
          <label>Número de Teléfono:</label>
          <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
            placeholder="Ingresa el número de teléfono"
          />
        </div>
        <div>
          <label>Zona:</label>
          <input
            type="text"
            value={zona}
            onChange={(e) => setZona(e.target.value)}
            required
            placeholder="Ingresa la zona"
          />
        </div>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
            placeholder="Ingresa el usuario"
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="text"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
            placeholder="Ingresa la contraseña"
          />
        </div>
        <button type="submit">Crear Usuario</button>
      </form>
    </div>
  );
};

export default CrearUsuarios;
