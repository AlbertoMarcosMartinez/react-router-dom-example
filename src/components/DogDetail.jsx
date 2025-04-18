import React from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import useDogDetail from '../hooks/useDogDetail';
import '../css/DogDetail.css';

const DogDetail = () => {
  const { name } = useParams();
  const { dog, loading, error } = useDogDetail(name);

  const nestedLinks = [
    { 
      to: "moredetails", 
      text: (dogName) => `${dogName} en detalle`
    },
    { 
      to: "CaresFYPet", 
      text: (dogName) => `Cuidados especiales para tu ${dogName}`
    },
    { 
      to: "gallery", 
      text: (dogName) => `Galería de fotos de ${dogName}`
    }
  ];

  if (loading) return <div className="loading">Loading dog details...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!dog) return <div className="error">Dog not found</div>;

  return (
    <div className="dog-detail">      
      <div className="detail-card">
        <h2>{dog.name}</h2>        
        {dog.reference_image_id && (
          <img 
            src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
            alt={dog.name}
            className="dog-image"
          />
        )} 

        <div className="main-characteristics-grid">
                <div className="full-width">
                    <p><strong>Temperament:</strong> <span>{dog.temperament || 'Not specified'}</span></p>
                </div>
                <div className="grid-item">
                    <p><strong>Height:</strong> <span>{dog.height.metric || 'Unknown'} cm</span></p>    
                </div>
                <div className="grid-item">
                    <p><strong>Weight:</strong> <span>{dog.weight.metric || 'Unknown'} kg</span></p>    
                </div>
                <div className="grid-item">
                    <p><strong>Affection Level:</strong> <span>{dog.affection_level || 'Unknown'}</span></p>
                </div>
                <div className="grid-item">
                    <p><strong>Child Friendly:</strong> <span>{dog.child_friendly || 'Unknown'}</span></p>
                </div>                
        </div>        
      </div>
       
      <h3>Te puede interesar....</h3>        
      <nav className="dog-nav-interest">
        <ul>
          {nestedLinks.map((link) => (
            <li key={link.to}>
              <NavLink 
                to={link.to}
                className={({ isActive }) => 
                  isActive ? 'nav-button active' : 'nav-button'
                }
              >
                {link.text(dog.name)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet context={{ dog }} />
      <div className="back-button-container">
        <NavLink to="/dogs" className="back-button">Volver a la lista de perros</NavLink> 
      </div>

    </div>
  );
};

export default DogDetail;