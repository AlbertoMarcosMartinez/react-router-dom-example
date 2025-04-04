import { useState, useEffect } from 'react';

const useDogBreeds = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = 'live_jYAMJMzFizHc9xHNeKXgx9JCt3NbHdHEfiKj824an7iTJ9qPeWizbU8kmEMWCsuh';

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await fetch('https://api.thedogapi.com/v1/breeds?limit=12', {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        const shuffledBreeds = data.sort(() => 0.5 - Math.random());
        const randomBreeds = shuffledBreeds.slice(0, 12);
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