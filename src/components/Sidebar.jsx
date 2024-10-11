import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaUsers, FaBell, FaUserPlus } from 'react-icons/fa';
import './formulario.css';

const Sidebar = ({ nombre, links }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>{nombre}</h3>
      </div>
      <nav className="sidebar-nav">
        {links.map((link) => (
          <NavLink
            key={link.label}
            to={link.path}
            end={link.end}
            className={({ isActive }) =>
              isActive ? 'sidebar-link active' : 'sidebar-link'
            }
          >
            {link.icon && <link.icon className="icon" />}
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
