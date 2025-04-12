import React, { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import AuthContext from '../../contexts/AuthContext';
import '../../css/Header.css';

const Header = () => {
  const { isAuthenticated, setIsAuthenticated, user, userImage } = useContext(AuthContext);

  function handleLoginClick() {
    // lógica para manejar el clic en el botón de inicio de sesión
    console.log("Login button clicked");  
    setIsAuthenticated(!isAuthenticated);  
  }

  function handleLogoutClick() {
    // lógica para manejar el clic en el botón de cerrar sesión
    console.log("Logout button clicked");    
    // Aquí puedes agregar la lógica para cerrar sesión, como limpiar el estado de autenticación
    // o redirigir al usuario a la página de inicio de sesión.
    setIsAuthenticated(!isAuthenticated);
  } 

  function handleRegisterClick() {
    // lógica para manejar el clic en el botón de registro
    console.log("Register button clicked");    
    // Aquí puedes agregar la lógica para redirigir al usuario a la página de registro.
  }

  return (
    <div>
      <div className="header-container">
        <div className="header-inner">
          <div className="logo">
            <h1>PETS LIST</h1>
          </div>

          {isAuthenticated ? (
            <div className="header-right">
              <div className="user-info">
                <Avatar alt={user.name} src={userImage} sx={{ width: 40, height: 40 }} />
                <h2>{user.surname}, {user.name}</h2>
              </div>
              <div className="logout-button">
                <button onClick={handleLogoutClick}>Logout</button>
              </div>
            </div>
          ) : (
            <div className="header-right">
              <div className="login-button">
                <button onClick={handleLoginClick}>Login</button>
              </div>
              <div className="register-button">
                <button onClick={handleRegisterClick}>Register</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Header;
