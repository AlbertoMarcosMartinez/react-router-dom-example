import React, { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import AuthContext from '../../contexts/AuthContext';
import '../../css/Header.css';

const Header = () => {
  const { isAuthenticated, user, userImage } = useContext(AuthContext);
  
  return (
    <div>
      {isAuthenticated && (
        <div className="header-container">
          <div className="header-inner">
            <div className="logo"><h1>PETS LIST</h1></div>
            <div className="header-right">
              <ul className="header-list">
                <li>
                  <Avatar 
                    alt={user?.name || 'User Profile'} 
                    src={userImage || '/default-avatar.png'} 
                  />
                </li>
                <li className="header-name">
                  {user?.surname}, {user?.name}
                </li>                
              </ul>
            </div>               
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
