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
  const { dogs, loading, error, refreshDogs } = useDogBreedsContext();
  const [filteredDogs, setFilteredDogs] = useState([]);
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    console.log('Dogs data:', dogs); // Para ver la estructura de los datos
    setFilteredDogs(dogs);
  }, [dogs]);

  const handleSearch = (searchTerm) => {
    if(searchTerm === "") {
      setFilteredDogs(dogs);
      setMessage({ 
        text: 'Debe escribir una raza en el buscador', 
        type: 'error' 
      });
      return;
    }

    const filtered = dogs.filter(dog => 
      dog.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDogs(filtered);
    setMessage({ text: '', type: '' });

    if (filtered.length === 0) {
      setMessage({ 
        text: 'No se encontraron razas que coincidan con la búsqueda', 
        type: 'info' 
      });
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

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1">
          Dog Breeds Explorer
        </Typography>
        <Button
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={refreshDogs}
        >
          Cargar nuevos perros
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
        {filteredDogs.map(dog => (
          <Grid item xs={12} sm={6} md={4} 
            sx={{ 
              maxWidth: '350px',
              minWidth: '280px',
              flex: '1 1 auto'
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
              onClick={() => navigate(`/dogs/${dog.name}`)}
            >
              <CardMedia
                component="img"
                height="200"
                image={dog.image || 'https://via.placeholder.com/400x200?text=No+Image'}
                alt={dog.name}
                sx={{ 
                  objectFit: 'cover',
                  backgroundColor: 'grey.100'
                }}
              />
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography 
                  variant="h6" 
                  component="h2" 
                  gutterBottom
                  sx={{ color: 'primary.main' }}
                >
                  {dog.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                >
                  Click to see breed details
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DogList;