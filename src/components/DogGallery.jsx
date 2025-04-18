import React from 'react';
import { useOutletContext } from 'react-router-dom';
import '../css/DogGallery.css';

const DogGallery = () => {
  const { dog } = useOutletContext();

  if (!dog || !dog.imageGallery) {
    return <div>No hay imágenes disponibles para esta raza.</div>;
  }

  return (
    <div className="dog-gallery">
      <h2>Galería de fotos de {dog.name}</h2>
      <div className="gallery-grid">
        {dog.imageGallery.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`${dog.name} - ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
};

export default DogGallery;