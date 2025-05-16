import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Lee el estado inicial de localStorage
  console.log('[AuthContext] Inicializando estado desde localStorage...');
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const value = localStorage.getItem('isAuthenticated');
    console.log('[AuthContext] isAuthenticated en localStorage:', value);
    return value === 'true';
  });
  const [isSidebarDisabled, setIsSidebarDisabled] = useState(false); 
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('user');
    console.log('[AuthContext] user en localStorage:', stored);
    return stored ? JSON.parse(stored) : null;
  });
  const [userImage, setUserImage] = useState(() => {
    const img = localStorage.getItem('userImage');
    console.log('[AuthContext] userImage en localStorage:', img);
    return img;
  });

  // Guarda en localStorage cuando cambian
  useEffect(() => {
    console.log('[AuthContext] useEffect isAuthenticated:', isAuthenticated);
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  useEffect(() => {
    console.log('[AuthContext] useEffect user:', user);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('userImage', user.imageUrl || '');
      console.log('[AuthContext] Guardando user y userImage en localStorage:', user, user.imageUrl);
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('userImage');
      console.log('[AuthContext] Eliminando user y userImage de localStorage');
    }
  }, [user]);

  const login = (userData) => {
    console.log('[AuthContext] login() llamado con:', userData);
    debugger; // <-- Aquí puedes inspeccionar el estado antes del login
    setIsAuthenticated(true);
    setUser(userData);
    setUserImage(userData.imageUrl);
    // El efecto useEffect guardará en localStorage
  };

  const logout = () => {
    console.log('[AuthContext] logout() llamado');
    debugger; // <-- Aquí puedes inspeccionar el estado antes del logout
    setIsAuthenticated(false);
    setUser(null);
    setUserImage(null);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    localStorage.removeItem('userImage');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, isSidebarDisabled, setIsSidebarDisabled, userImage, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

