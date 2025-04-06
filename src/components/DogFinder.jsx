import React, { useState } from 'react'
import '../css/DogFinder.css';

const DogFinder = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="dog-finder">        
        <h2>Busca tus razas de perro favoritas</h2>
        <form className="dog-finder-form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Buscar por raza..." 
                value={searchTerm}
                onChange={handleChange}
                className="search-input"
            />
            <button type="submit" className="PrimaryRoundedButton">
                Buscar
            </button>            
        </form>
    </div>
  )
}

export default DogFinder