import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [userImage, setUserImage] = useState(null);

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    setUserImage(userData.imageUrl);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setUserImage(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, userImage, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

