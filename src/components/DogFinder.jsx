import React, { useState } from 'react'
import '../css/DogFinder.css';

const DogFinder = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm) {
      setMessage({ text: 'Por favor ingresa una raza de perro.', type: 'error' });
      return;
    }
    setMessage(null);
    onSearch(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="dog-finder">                
        <form className="dog-finder-form" onSubmit={handleSubmit}>
            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Buscar raza de perro..."
                value={searchTerm}
                onChange={handleChange}
              />
              <button type="submit" className="PrimaryRoundedButton">
                  Buscar
              </button>  
              {message && (
                <div className={`search-message message ${message.type}`}>
                  {message.text}
                </div>
              )}          
            </div>
        </form>
    </div>
  )
}

export default DogFinder