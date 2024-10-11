import React from 'react';
import Formulario from './formulario';
import './formulario.css'; 

const Home = ({ onLogin }) => {
  return (
    <div className="home-container">
      <Formulario onLogin={onLogin} />
    </div>
  );
};

export default Home;
