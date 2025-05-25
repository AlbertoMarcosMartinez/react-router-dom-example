import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Button, 
  Container,
  Box,
  Chip 
} from '@mui/material';
import { adoptableDogs } from '../data/adoptableDogs';

const AdoptionList = () => {
  const navigate = useNavigate();

  const handleDogClick = (id, event) => {
    // Prevenir la propagación del evento si viene del botón
    if (event.target.tagName === 'BUTTON') {
      event.stopPropagation();
    }
    navigate(`/adopcion/${id}`);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" sx={{ mb: 4, mt: 2 }}>
        Perros en Adopción
      </Typography>
      <Grid container spacing={3}>
        {adoptableDogs.map((dog) => (
          <Grid item xs={12} sm={6} md={4} key={dog.id}>
            <Card 
              sx={{ 
                height: '100%',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                  transition: 'all 0.3s ease-in-out'
                }
              }}
              onClick={(e) => handleDogClick(dog.id, e)}
            >
              <CardMedia
                component="img"
                height="200"
                image={dog.image}
                alt={dog.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {dog.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {dog.breed} • {dog.age} años • {dog.gender}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {dog.shelter}
                </Typography>
                <Box sx={{ mt: 2, mb: 2 }}>
                  {dog.features.map((feature, index) => (
                    <Chip
                      key={index}
                      label={feature}
                      size="small"
                      sx={{ mr: 1, mb: 1 }}
                    />
                  ))}
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={(e) => handleDogClick(dog.id, e)}
                >
                  Ver más detalles
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
export default AdoptionList;