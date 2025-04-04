import React from 'react';
import useDogBreeds from '../hooks/useDogBreeds';
import '../css/DogList.css';

const DogList = () => {
  const { dogs, loading, error } = useDogBreeds();

  if (loading) return <div className="loading">Loading dogs...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="dog-list">      
      {dogs.map(breed => (
        <div key={breed.id} className="dog-item">
          <img src={breed.image.url} alt={breed.name} className="dog-image" />
          <div className="dog-content">
            <h2 className="dog-name">{breed.name}</h2>
            <p className="dog-temperament">{breed.temperament}</p>
          </div>
        </div>
      ))}
    </div>    
  );
};

export default DogList;