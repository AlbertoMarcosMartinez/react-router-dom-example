import React, { useContext } from 'react';
import Avatar from './Avatar'; 
import AuthContext from '../../contexts/AuthContext';
import '../../css/Header.css';

const Header = () => {
  const { isAuthenticated, user, userImage, logout } = useContext(AuthContext);

  const handleLogout = () => {
 
    window.location.href = '/'; // Redirigir a la página de inicio después de cerrar sesión
  }

      
  return (
    <div className="header-container">
      <div className="header-inner">
        <div className="logo">
          <h1>PETS LIST</h1>
        </div>

        {isAuthenticated ? (
          <div className="header-right-table">
            <Avatar
              imageUrl={userImage}
              name={user?.name || 'Guest'}
              surname={user?.surname || ''}
              size="medium"
              showName={true}
            />
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="header-right">
            <a href="/login" className="login-button">Login</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
