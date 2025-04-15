import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    // Redirige al usuario a la página de inicio de sesión si no está autenticado
    return <Navigate to="/login" replace />;
  }

  // Si está autenticado, renderiza el contenido protegido
  return children;
};

export default ProtectedRoute;