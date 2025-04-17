import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import useDogBreeds from '../hooks/useDogBreeds';
import DogFinder from './DogFinder';
import Message from './common/Message';
import '../css/DogList.css';

import AuthContext from '../contexts/AuthContext';

const DogList = () => {
  const { dogs, loading, error } = useDogBreeds();
  const [filteredDogs, setFilteredDogs] = useState([]);
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    setFilteredDogs(dogs);
  }, [dogs]);

  const handleSearch = (searchTerm) => {
    if(searchTerm === "") {
      setFilteredDogs(dogs);
      setMessage({ 
        text: 'Debe escribir una raza en el buscador', 
        type: 'error' 
      });
      return;
    }

    const filtered = dogs.filter(dog => 
      dog.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDogs(filtered);
    setMessage({ text: '', type: '' });

    if (filtered.length === 0) {
      setMessage({ 
        text: 'No se encontraron razas que coincidan con la búsqueda', 
        type: 'info' 
      });
    }
  };

  if (loading) return <div className="loading">Loading dogs...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="dog-list">
      <DogFinder onSearch={handleSearch} />
      <p>
      {message.text && (
        <Message 
          text={message.text} 
          type={message.type}
          className="search-message"
        />
      )}
      </p>      
      
      <div className="breeds-container">        
        {filteredDogs.map(dog => (
          <Link 
            to={`/dogs/${dog.name}`} 
            key={dog.id} 
            className="breed-card"
          >
            <h3>{dog.name}</h3>
            <img 
              src={dog.image?.url} 
              alt={dog.name}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/150';
              }}
            />
            <p>Click for more details</p>
          </Link>
        ))}
      </div>
    </div>    
  );
};

export default DogList;