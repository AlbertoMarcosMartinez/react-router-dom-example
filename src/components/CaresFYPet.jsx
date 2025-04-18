import React from 'react'
import { useOutletContext } from 'react-router-dom';
import '../css/DogGallery.css';

const CaresFYPet = () => {
    const { dog } = useOutletContext();

    if (!dog || !dog.cares) {
        return <div>No hay info disponible para esta raza.</div>;
      }
  return (
    <div> Lista de los cuidados para tu {dog.name}</div>

  )
}

export default CaresFYPet