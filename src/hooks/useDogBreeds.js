import { useState, useEffect} from 'react';

const useDogBreeds = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);  
  const dogsApiKey = import.meta.env.VITE_DOGAPISUSCR;

  
   if (!dogsApiKey) {
     console.log('Me vuelvo locoooo, no la encuentro.');
   } 
   else {      
     console.log('Environment variable:', import.meta.env.VITE_DOGAPISUSCR);
  }

  const ObtterListaRazasPerro = async (limit = 12) => {
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

  const obteenRazasAleatorias = async (amount = 12) => {

    console.log('dogsApiKey: ', dogsApiKey)
    setLoading(true);
    const data = await ObtterListaRazasPerro();
    if (data) {
      // Fisher-Yates Shuffle
      const shuffled = [...data]; // copia del array
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      const randomBreeds = shuffled.slice(0, amount);      
      setLoading(false);
      setDogs(randomBreeds);
    }
  };

  const buscaPorNombre = async (breedName) => {
    const data = await ObtterListaRazasPerro();
    if (data) {
      const filteredBreeds = data.filter(breed => 
        breed.name.toLowerCase().includes(breedName.toLowerCase())
      );
      setDogs(filteredBreeds);
    }
  };  
  
  useEffect(() => {

    obteenRazasAleatorias();
  },[]);
  
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