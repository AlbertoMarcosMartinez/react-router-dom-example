import { useState, useEffect } from 'react';

const useDogBreeds = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = 'live_jYAMJMzFizHc9xHNeKXgx9JCt3NbHdHEfiKj824an7iTJ9qPeWizbU8kmEMWCsuh';

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await fetch('https://api.thedogapi.com/v1/breeds?limit=100', {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
          }
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json();
  
        // Fisher-Yates Shuffle
        const shuffled = [...data]; // copia del array
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
  
        const randomBreeds = shuffled.slice(0, 12);
        setDogs(randomBreeds);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
  
    fetchDogs();
  }, []);

  return { dogs, loading, error };
};

export default useDogBreeds;