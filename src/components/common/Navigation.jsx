import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width:686px)');

  const getMenuText = (path) => {
    switch (path) {
      case '/dogs':
        return isMobile ? 'Breeds' : 'Explore Breeds';
      case '/adopciones':
        return isMobile ? 'Adopt' : 'Adoptions';
      case '/mailbox':
        return isMobile ? 'Mail' : 'Mailbox';
      default:
        return '';
    }
  };

  const isActive = (path) => {
    if (location.pathname === path) return true;
    switch (path) {
      case '/dogs':
        return location.pathname.startsWith('/dogs/');
      case '/adopciones':
        return location.pathname.startsWith('/adopcion/');
      default:
        return false;
    }
  };

  const menuItems = [
    { path: '/dogs', text: getMenuText('/dogs') },
    { path: '/adopciones', text: getMenuText('/adopciones') },
    { path: '/FAQs', text: 'FAQs' },
    { path: '/contact', text: 'Contact' },
    { path: '/mailbox', text: getMenuText('/mailbox') }
  ];

  return (
    <nav className="main-nav">
      <ul className="nav-menu">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link 
              to={item.path} 
              className={isActive(item.path) ? 'active' : ''}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;