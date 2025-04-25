import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import '../../css/Navigation.css';

const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  if (!isAuthenticated) return null;

  return (
    <nav className="main-nav">
      <ul className="nav-menu">
        <li>
          <Link to="/dogs" className={location.pathname === '/dogs' ? 'active' : ''}>
            Explore Breeds
          </Link>
        </li>
        <li>
          <Link to="/adopciones" className={location.pathname === '/adopciones' ? 'active' : ''}>
            Adoptions
          </Link>
        </li>
        <li>
          <Link to="/FAQs" className={location.pathname === '/FAQs' ? 'active' : ''}>
            FAQs
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/mailbox" className={location.pathname === '/mailbox' ? 'active' : ''}>
            Mailbox
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;