import React, { useState, useContext } from 'react';
import Avatar from './Avatar'; 
import AuthContext from '../../contexts/AuthContext';
import Modal from '../Modal'; 
import '../../css/Header.css';

const Header = () => {
  const { isAuthenticated, setIsAuthenticated, user, userImage } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  // const handleLogout = () => {
 
  //   window.location.href = '/'; 
  //   setIsAuthenticated(false);
  // }

  return (
    <div className="header-container">
      <div className="header-inner">
        <div className="logo">
        <h1>Welcome to the Dog App</h1>
        </div>

        {isAuthenticated ? (
            <div className="header-right">
              <Avatar
                imageUrl={userImage}
                name={user?.name || 'Guest'}
                surname={user?.surname || ''}
                size="medium"
                alignment="right"
                backgroundColor="#f0f0f0"
                textColor="#333"
                onClick={() => alert('Avatar clicked!')}
                showName={true}
              />
              <button className="logout-button" onClick={handleOpenModal}>
                Logout
              </button>
              {isOpen && <Modal closeModal={setIsOpen}/>}
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
