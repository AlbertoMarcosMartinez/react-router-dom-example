import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import Login from './Login';

const MainPage = () => {
  const { isAuthenticated, user } = useContext(AuthContext);

  return (
    <div className='container'>      
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user?.name} {user?.surname}!</p>
          <p>You are logged in. Enjoy exploring the app!</p>
        </div>
      ) : (
        <div className='container'>
          <p>Please log in to access more features.</p>
          <Login/>
        </div>
      )}
    </div>
  );
};

export default MainPage;