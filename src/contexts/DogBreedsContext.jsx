/**
 * Context para la gestión global del estado de razas de perros
 * 
 * Características:
 * - Utiliza el patrón Provider/Consumer de React Context
 * - Implementa un custom hook (useDogBreedsContext) para facilitar el acceso al contexto
 * - Maneja estados de carga, error y datos
 * 
 * Alternativas consideradas:
 * 1. Redux: Más complejo pero mejor para aplicaciones grandes
 * 2. Zustand: Más ligero y simple que Redux
 * 3. Jotai/Recoil: Para estado atómico, mejor en casos de actualización frecuente
 */

import React, { createContext, useContext, useState } from 'react';
import useDogBreeds from '../hooks/useDogBreeds';

const DogBreedsContext = createContext();

export const DogBreedsProvider = ({ children }) => {
  const [hasInitialLoad, setHasInitialLoad] = useState(false);
  const { fetchInitialDogs, dogs, loading, error, searchBreeds } = useDogBreeds();

  const refreshDogs = async () => {
    try {
      setHasInitialLoad(false);
      await fetchInitialDogs(true);
      setHasInitialLoad(true);
    } catch (error) {
      console.error('Error refreshing dogs:', error);
    }
  };

  const value = {
    dogs,
    loading: loading && !hasInitialLoad,
    error,
    searchBreeds,
    refreshDogs
  };

  // Error boundary fallback
  if (error && !loading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h3>Something went wrong</h3>
        <p>{error}</p>
        <button onClick={() => refreshDogs()}>Try again</button>
      </div>
    );
  }

  return (
    <DogBreedsContext.Provider value={value}>
      {children}
    </DogBreedsContext.Provider>
  );
};

export const useDogBreedsContext = () => {
  const context = useContext(DogBreedsContext);
  if (!context) {
    throw new Error('useDogBreedsContext must be used within a DogBreedsProvider');
  }
  return context;
};