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

import { useState, useEffect } from 'react';

const useDogBreeds = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // API key from environment variables
  const apiKey = import.meta.env.VITE_DOGAPISUSCR;

  useEffect(() => {
    const fetchDogs = async () => {
      // Cache check
      if (dogs.length > 0) return;
      
      try {
        const response = await fetch('https://api.thedogapi.com/v1/breeds', {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        // Barajar el array y tomar 10 elementos aleatorios
        const shuffledBreeds = data.sort(() => 0.5 - Math.random());
        const randomBreeds = shuffledBreeds.slice(0, 15);
        
        // Data transformation layer
        const breedsWithImages = randomBreeds.map(breed => ({
          id: breed.id,
          name: breed.name,
          // Fallback para imágenes no disponibles
          image: breed.image?.url || 'https://via.placeholder.com/400x200?text=No+Image',
          bred_for: breed.bred_for,
          breed_group: breed.breed_group,
          life_span: breed.life_span,
          temperament: breed.temperament
        }));

        setDogs(breedsWithImages);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching dogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDogs();
  }, [apiKey]); // Dependency array optimizado

  const searchBreeds = async (searchTerm) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${encodeURIComponent(searchTerm)}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
          }
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Mapear los resultados para asegurar que tengan imágenes
      const breedsWithImages = data.map(breed => ({
        id: breed.id,
        name: breed.name,
        image: breed.image?.url || 'https://via.placeholder.com/400x200?text=No+Image',
        bred_for: breed.bred_for,
        breed_group: breed.breed_group,
        life_span: breed.life_span,
        temperament: breed.temperament
      }));

      setDogs(breedsWithImages);
    } catch (err) {
      setError(err.message);
      console.error('Error searching breeds:', err);
    } finally {
      setLoading(false);
    }
  };

  return {
    dogs,
    loading,
    error,
    searchBreeds
  };
};

export default useDogBreeds;