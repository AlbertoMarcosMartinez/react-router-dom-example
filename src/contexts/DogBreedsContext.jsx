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
  // Control de carga inicial para evitar llamadas API innecesarias
  const [hasInitialLoad, setHasInitialLoad] = useState(false);
  
  // Custom hook que maneja la lógica de datos
  const { dogs, loading, error, searchBreeds } = useDogBreeds();

  // Función para forzar recarga de datos
  const refreshDogs = () => {
    setHasInitialLoad(false);
  };

  // Objeto de contexto con memoización implícita
  const value = {
    dogs,
    // Optimización para mostrar loading solo en carga inicial
    loading: loading && !hasInitialLoad,
    error,
    searchBreeds,
    refreshDogs,
    hasInitialLoad,
    setHasInitialLoad
  };

  return (
    <DogBreedsContext.Provider value={value}>
      {children}
    </DogBreedsContext.Provider>
  );
};

/**
 * Custom Hook para usar el contexto
 * Incluye validación para asegurar uso dentro del Provider
 * 
 * Alternativa: Podríamos usar TypeScript para mejor type-safety
 */
export const useDogBreedsContext = () => {
  const context = useContext(DogBreedsContext);
  if (context === undefined) {
    throw new Error('useDogBreedsContext must be used within a DogBreedsProvider');
  }
  return context;
};