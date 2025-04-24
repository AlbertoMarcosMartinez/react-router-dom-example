import { useState, useEffect } from 'react';

const useDogBreeds = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dogsApiKey = import.meta.env.VITE_DOGAPISUSCR;

  if (!dogsApiKey) {
    console.log('Me vuelvo locoooo, no la encuentro.');
  } else {
    console.log('Environment variable:', import.meta.env.VITE_DOGAPISUSCR);
  }

  const ObtterListaRazasPerro = async (limit = 15) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.thedogapi.com/v1/breeds?limit=${limit}`, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': dogsApiKey
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const obtenerPerroPorId = async (id) => {
    try {
      const response = await fetch(`https://api.thedogapi.com/v1/breeds/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': dogsApiKey
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      console.error(`Error fetching breed ${id}:`, err);
      return null;
    }
  };

  const obteenRazasAleatorias = async (amount = 15) => {
    setLoading(true);
    try {
      const uniqueIds = new Set();
      const validResults = [];
      
      // Seguir intentando hasta obtener suficientes perros con imágenes
      while (validResults.length < amount && uniqueIds.size < 200)     {
        const id = Math.floor(Math.random() * 172) + 1;
        if (!uniqueIds.has(id)) {
          uniqueIds.add(id);
          const dog = await obtenerPerroPorId(id);
          if (dog && dog.reference_image_id) {
            validResults.push(dog);
          }
        }
      }

      console.log('Perros con imágenes:', validResults.map(dog => ({
        id: dog.id,
        name: dog.name,
        imageUrl: dog.image?.url
      })));

      setDogs(validResults);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const buscaPorNombre = async (breedName) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${encodeURIComponent(breedName)}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': dogsApiKey
          }
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const searchResults = await response.json();
      
      // Para cada resultado de búsqueda, obtener la información completa incluyendo imágenes
      const detailedResults = await Promise.all(
        searchResults.map(async (breed) => {
          const fullBreedData = await obtenerPerroPorId(breed.id);
          return fullBreedData;
        })
      );

      // Filtrar resultados nulos y actualizar el estado
      const validResults = detailedResults.filter(breed => breed !== null);
      setDogs(validResults);
    } catch (err) {
      setError(err.message);
      console.error('Error en la búsqueda:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obteenRazasAleatorias();
  }, []);

  return {
    dogs,
    loading,
    error,
    obteenRazasAleatorias,
    buscaPorNombre,
    ObtterListaRazasPerro
  };
};

export default useDogBreeds;