import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Container, 
  Paper, 
  Typography, 
  Box, 
  Button,
  Grid,
  IconButton,
  Chip
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { adoptableDogs } from '../data/adoptableDogs';

const DogAdoptionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dog = adoptableDogs.find(d => d.id === parseInt(id));

  if (!dog) {
    return (
      <Container sx={{ py: 4 }}>
        <Button 
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/adopciones')}
          sx={{ mb: 2 }}
        >
          Volver a la lista
        </Button>
        <Typography>No se encontró el perro solicitado</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button 
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/adopciones')}
        sx={{ mb: 2 }}
      >
        Volver a la lista
      </Button>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <img
              src={dog.image}
              alt={dog.name}
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>{dog.name}</Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6" color="text.secondary">
                {dog.breed} • {dog.age} años • {dog.gender}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {dog.shelter}
              </Typography>
            </Box>
            <Typography paragraph>{dog.description}</Typography>
            <Box sx={{ mb: 3 }}>
              {dog.features.map((feature, index) => (
                <Chip
                  key={index}
                  label={feature}
                  sx={{ mr: 1, mb: 1 }}
                />
              ))}
            </Box>
            <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
              >
                Solicitar Adopción
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate('/adopciones')}
              >
                Ver más perros
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default DogAdoptionDetail;