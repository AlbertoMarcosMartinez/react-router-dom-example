import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../css/Navigation.css'; // Asegúrate de que la ruta sea correcta

const Navigation = () => {
  const location = useLocation();

  // Función para verificar si una ruta está activa
  const isActive = (path) => {
    // Para rutas base
    if (location.pathname === path) return true;

    // Para rutas anidadas
    switch (path) {
      case '/dogs':
        return location.pathname.startsWith('/dogs/');
      case '/adopciones':
        return location.pathname.startsWith('/adopcion/');
      default:
        return false;
    }
  };

  return (
    <nav className="main-nav">
      <ul className="nav-menu">
        <li>
          <Link 
            to="/dogs" 
            className={isActive('/dogs') ? 'active' : ''}
          >
            Explore Breeds
          </Link>
        </li>
        <li>
          <Link 
            to="/adopciones" 
            className={isActive('/adopciones') ? 'active' : ''}
          >
            Adoptions
          </Link>
        </li>
        <li>
          <Link 
            to="/FAQs" 
            className={isActive('/FAQs') ? 'active' : ''}
          >
            FAQs
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className={isActive('/contact') ? 'active' : ''}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link 
            to="/mailbox" 
            className={isActive('/mailbox') ? 'active' : ''}
          >
            Mailbox
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;