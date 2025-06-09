import React, { useState, useEffect } from 'react';
import { 
  ImageList, 
  ImageListItem, 
  Box, 
  Typography,
  CircularProgress,
  Alert,
  Modal,
  Container
} from '@mui/material';
import { useParams } from 'react-router-dom';

const DogGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?query=${name}+dog+breed&per_page=12`,
          {
            headers: {
              Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`
            }
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }

        const data = await response.json();
        setImages(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [name]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
          <CircularProgress />
        </Box>
      ) : error ? (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      ) : (
        <>
          <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
            {name} Photo Gallery
          </Typography>
          
          <ImageList 
            sx={{ 
              width: '100%',
              height: 'auto',
              gap: 16,
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)!important',
                sm: 'repeat(2, 1fr)!important',
                md: 'repeat(3, 1fr)!important'
              }
            }}
            cols={3}
          >
            {images.map((item) => (
              <ImageListItem 
                key={item.id}
                sx={{
                  cursor: 'pointer',
                  overflow: 'hidden',
                  borderRadius: 2,
                  aspectRatio: '1',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    transition: 'transform 0.3s ease-in-out',
                    boxShadow: (theme) => theme.shadows[3]
                  }
                }}
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.urls.small}
                  alt={item.alt_description}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>

          <Modal
            open={!!selectedImage}
            onClose={() => setSelectedImage(null)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2
            }}
          >
            <Box
              sx={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                bgcolor: 'background.paper',
                borderRadius: 2,
                p: 1,
                position: 'relative',
                outline: 'none'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedImage && (
                <img
                  src={selectedImage.urls.regular}
                  alt={selectedImage.alt_description}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: 8
                  }}
                />
              )}
            </Box>
          </Modal>
        </>
      )}
    </Container>
  );
};

export default DogGallery;