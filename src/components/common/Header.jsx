import React, { useContext } from 'react';
import Avatar from './Avatar'; 
import AuthContext from '../../contexts/AuthContext';
import '../../css/Header.css';

const Header = () => {
  const { isAuthenticated, setIsAuthenticated, user, userImage, logout } = useContext(AuthContext);

  const handleLogout = () => {
 
    window.location.href = '/'; 
    setIsAuthenticated(false);
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
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
