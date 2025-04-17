import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import Login from './Login';
import Presentation from './Presentation';
import ErrorBoundary from './ErrorBoundary';

const MainPage = () => {
  const { isAuthenticated, user } = useContext(AuthContext);

  console.log('User:', user);

  return (
    <div className="main-page">      
      {isAuthenticated ? (
        <ErrorBoundary>
          <Presentation user={user?.name} lastName={user?.surname} />
        </ErrorBoundary>
      ) : (
        <div>          
          <Login />
        </div>
      )}
    </div>
  );
};

export default MainPage;