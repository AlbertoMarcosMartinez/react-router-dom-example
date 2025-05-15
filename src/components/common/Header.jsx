import React, { useContext, useState } from 'react';
import Avatar from './Avatar'; 
import AuthContext from '../../contexts/AuthContext';
import '../../css/Header.css';
import Switch from '@mui/material/Switch';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

const Header = ({ openModal, isDarkMode, toggleTheme }) => {
  console.log('toggleTheme:', toggleTheme); 
  const { isAuthenticated, user, userImage } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
 
  const handleThemeToggle = () => { 
    console.log(`[Theme] Cambiando tema. Nuevo valor: ${!isDarkMode ? 'Oscuro' : 'Claro'}`);
    toggleTheme();
  } 
  const handleMenuItemClick = (event) => {
    const option = event.currentTarget.innerText;
    if (option === "Perfil") {
      navigate('/profile');
    } else if (option === "Configuración") {
      navigate('/settings');
    } else if (option === "Cerrar sesión") {
      openModal();
    }
    handleMenuClose();
  };

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header-container">
      <div className="header-inner">
        
        <div className="theme-toggle" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginRight: '20px' }}>
          <LightModeIcon color={isDarkMode ? "disabled" : "primary"} />
          <Switch
            checked={isDarkMode}
            onChange={handleThemeToggle}
            color="primary"
            slotProps={{ input: { 'aria-label': 'toggle dark mode' } }}
          />
          <DarkModeIcon color={isDarkMode ? "primary" : "disabled"} />
        </div>

        <div className="logo">
          <h1>Welcome to the Dog App</h1>
        </div>

        <div className="header-right">
          {isAuthenticated && (
            <span style={{ marginRight: '10px', fontWeight: 500 }}>
              ¡Hola, {user?.name || 'Guest'}!
            </span>
          )}

          {isAuthenticated && (
            <>
              <IconButton onClick={handleAvatarClick} sx={{ p: 0 }}>
                <span className="avatar-status">
                  <Avatar
                    imageUrl={userImage}
                    name={user?.name || 'Guest'}
                    surname={user?.surname || ''}
                    size="medium"
                    alignment="right"
                    backgroundColor="#f0f0f0"
                    textColor="#333"
                    showName={false}
                  />
                  <span className="avatar-status-dot"></span>
                </span>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem onClick={handleMenuItemClick}>Perfil</MenuItem>
                <MenuItem onClick={handleMenuItemClick}>Configuración</MenuItem>
                <MenuItem onClick={handleMenuItemClick}>Cerrar sesión</MenuItem>
              </Menu>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
