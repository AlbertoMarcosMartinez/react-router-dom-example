import React, { useState } from 'react';
import { createContext } from 'react';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(true);    
    const [user, setUser] = useState({
        id: 1,
        name: "Alberto",
        surname: "Marcos Martínez",
        age: 42,
        country: "Spain",
        city: "Madrid"
      });
      
    const [userImage, setUserImage] = useState("https://randomuser.me/api/portraits/men/32.jpg"); 
    
    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser, userImage, setUserImage }}>  
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;

