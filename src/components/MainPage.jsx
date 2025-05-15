import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import Presentation from './Presentation';
import ErrorBoundary from './ErrorBoundary';
import CircularProgress from '@mui/material/CircularProgress'; // Importa el loader
import Box from '@mui/material/Box';

const MainPage = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
        <CircularProgress color="primary" size={60} />
      </Box>
    );
  }

  return (
    <div className="main-page">
      <ErrorBoundary>
        <Presentation user={user?.name} lastName={user?.surname} />
      </ErrorBoundary>
    </div>
  );
};

export default MainPage;