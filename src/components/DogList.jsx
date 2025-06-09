/**
 * Componente de lista de perros
 * 
 * Características:
 * - Implementa patrón de presentación
 * - Usa Material-UI para UI consistente
 * - Maneja estados de loading/error
 * - Implementa búsqueda en tiempo real
 * 
 * Alternativas consideradas:
 * 1. Virtualización con react-window para listas grandes
 * 2. Infinite scroll con react-infinite-scroll-component
 * 3. Paginación del lado del servidor
 */

import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box,
  Alert,
  Button 
} from '@mui/material';
import { useDogBreedsContext } from '../contexts/DogBreedsContext';
import RefreshIcon from '@mui/icons-material/Refresh';
import DogFinder from './DogFinder';
import '../css/DogList.css';

const DogList = () => {
  const navigate = useNavigate();

  const { dogs, loading, error, searchBreeds, refreshDogs } = useDogBreedsContext();
  const [filteredDogs, setFilteredDogs] = useState([]);
  const [message, setMessage] = useState({ text: '', type: '' });

  // Inicializar filteredDogs cuando dogs cambia
  useEffect(() => {
    setFilteredDogs(dogs);
  }, [dogs]);

  const handleSearch = async (searchTerm) => {
    if (searchTerm === "") {
      setFilteredDogs(dogs);
      setMessage({ 
        text: 'Debe escribir una raza en el buscador', 
        type: 'error' 
      });
      return;
    }

    // Si el término es corto, buscar solo en los datos locales
    if (searchTerm.length < 5) {
      setMessage({ 
          text: 'Debe realizar una buasqueda con al menos 5 caracteres', 
          type: 'info' 
        });
        
    } else {
          // Para términos más largos, buscar en la API
          const searchResults = await searchBreeds(searchTerm);
          setFilteredDogs(searchResults);

          if (searchResults.length === 0) {
            setMessage({ 
              text: 'No se encontraron razas que coincidan con la búsqueda', 
              type: 'info' 
            });
          } else {
            setMessage({ text: '', type: '' });
          }
    }   
  };

  if (loading) return (
    <Container sx={{ py: 4, textAlign: 'center' }}>
      <Typography>Loading breeds...</Typography>
    </Container>
  );
  
  if (error) return (
    <Container sx={{ py: 4 }}>
      <Alert severity="error">Error: {error}</Alert>
    </Container>
  );

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <DogFinder onSearch={handleSearch} />
        {message.text && (
          <Alert 
            severity={message.type} 
            sx={{ mt: 2 }}
          >
            {message.text}
          </Alert>
        )}
      </Box>     

      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        {filteredDogs.map(dog => (
          <Grid item xs={12} sm={6} md={4} 
            sx={{ 
              maxWidth: '300px', // Cambiado para hacer cuadrado
              minWidth: '300px',
              flex: '1 1 auto',
              aspectRatio: '1/1' // Forzar proporción cuadrada en el Grid item
            }}
            key={dog.id}
          >
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                  transition: 'all 0.3s ease-in-out'
                }
              }}
              onClick={() => navigate(`/dogs/${dog.name}`, { 
                state: { 
                  dimensions: dog.dimensions,
                  image: dog.image 
                }
              })}
            >
              <CardMedia
                component="img"
                image={dog.image || 'https://via.placeholder.com/300x300?text=No+Image'}
                alt={dog.name}
                sx={{ 
                  objectFit: 'cover',
                  backgroundColor: 'grey.100',
                  aspectRatio: '1/1', // Hacer la imagen cuadrada
                  width: '100%',
                  height: '300px' // Altura igual al ancho para mantener cuadrado
                }}
              />
              <CardContent sx={{ 
                flexGrow: 1, 
                textAlign: 'center',
                padding: 2 // Reducir padding para mejor proporción
              }}>
                <Typography 
                  variant="h6" 
                  component="h2" 
                  gutterBottom
                  sx={{ 
                    color: 'primary.main',
                    fontSize: '1.1rem' // Reducir tamaño de fuente para mejor ajuste
                  }}
                >
                  {dog.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ fontSize: '0.9rem' }}
                >
                  Click to see breed details
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, textAlign: 'right' }}>
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<RefreshIcon />}
          onClick={refreshDogs}
        >
          Refresh Dog List
        </Button>
      </Box>
    </Container>
  );
};

export default DogList;