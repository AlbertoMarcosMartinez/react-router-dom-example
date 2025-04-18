import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes para validar las props

const EnConstruccion = ({ desc }) => {
  return (
    <div className="construction-container">
      <h1>🚧 ¡Estamos trabajando en ello! 🚧</h1>
      <p>
        Esta nueva sección dedicada a <strong>{desc}</strong> estará disponible muy pronto. 
        ¡Gracias por tu paciencia!
      </p>      
    </div>
  );
};

// Validac  ión de las props
EnConstruccion.propTypes = {
  name: PropTypes.string.isRequired,
};

export default EnConstruccion;
