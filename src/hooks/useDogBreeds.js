/**
 * Custom Hook para manejar la lógica de datos de razas de perros
 * 
 * Características:
 * - Separación de concerns (SRP)
 * - Manejo de estado local
 * - Gestión de efectos secundarios
 * - Cache de datos en memoria
 * 
 * Alternativas consideradas:
 * 1. React Query: Mejor para caching y revalidación
 * 2. SWR: Similar a React Query, con enfoque en stale-while-revalidate
 * 3. Apollo Client: Para APIs GraphQL
 */

import { useState, useEffect, useCallback } from 'react';

const getImageDimensions = async (imageUrl) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height,
        aspectRatio: img.width / img.height
      });
    };
    img.src = imageUrl;
  });
};

const useDogBreeds = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const apiKey = import.meta.env.VITE_DOGAPISUSCR;

  const fetchInitialDogs = useCallback(async (forceRefresh = false) => {
    if (dogs.length > 0 && !forceRefresh) return;
    
    setLoading(true);
    setError(null); // Reset error state
    
    try {
      const response = await fetch('https://api.thedogapi.com/v1/breeds', {
        headers: {
          'x-api-key': apiKey
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Barajar el array y tomar 10 elementos aleatorios
      const shuffledBreeds = [...data].sort(() => 0.5 - Math.random());
      const randomBreeds = shuffledBreeds.slice(0, 15).map(breed => ({
        ...breed,
        image: breed.image?.url || 'https://via.placeholder.com/400x200?text=No+Image'
      }));
      
      setDogs(randomBreeds);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching dogs:', err);
    } finally {
      setLoading(false);
    }
  }, [apiKey]);

  useEffect(() => {
    fetchInitialDogs();
  }, [fetchInitialDogs]);

  const searchBreeds = async (searchTerm) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${encodeURIComponent(searchTerm)}`,
        {
          headers: {
            'x-api-key': apiKey
          }
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      setError(err.message);
      console.error('Error searching breeds:', err);
      return [];
    } finally {
      setLoading(false);
    }
  };

  return {
    dogs,
    loading,
    error,
    searchBreeds,
    fetchInitialDogs
  };
};

export default useDogBreeds;