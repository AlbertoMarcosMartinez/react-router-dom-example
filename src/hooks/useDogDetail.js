import { useState, useEffect } from 'react';

const useDogDetail = (name) => {
  const [dog, setDog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDogDetail = async () => {
      try {
        const response = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
        if (!response.ok) {
          throw new Error('Failed to fetch dog details');
        }
        const data = await response.json();
        const dogData = data[0];
        setDog(dogData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDogDetail();
  }, [name]);

  return { dog, loading, error };
};

export default useDogDetail;