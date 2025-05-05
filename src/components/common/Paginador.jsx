import React from 'react';
import PropTypes from 'prop-types';
import '../../css/Paginador.css';

const Paginador = ({ 
  paginaActual, 
  totalPaginas, 
  onPageChange,
  className = '' 
}) => {
  return (
    <div className={`paginacion ${className}`}>
      <button
        className="pagina-btn"
        onClick={() => onPageChange(paginaActual - 1)}
        disabled={paginaActual === 1}
      >
        ← Anterior
      </button>

      {[...Array(totalPaginas)].map((_, index) => (
        <button
          key={index}
          className={`pagina-numero ${paginaActual === index + 1 ? "activo" : ""}`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className="pagina-btn"
        onClick={() => onPageChange(paginaActual + 1)}
        disabled={paginaActual === totalPaginas}
      >
        Siguiente →
      </button>
    </div>
  );
};

Paginador.propTypes = {
  paginaActual: PropTypes.number.isRequired,
  totalPaginas: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default Paginador;