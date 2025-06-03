import React, { createContext, useContext, useState } from 'react';
import useDogBreeds from '../hooks/useDogBreeds';

const DogBreedsContext = createContext();

export const DogBreedsProvider = ({ children }) => {
  const [hasInitialLoad, setHasInitialLoad] = useState(false);
  const { dogs, loading, error, searchBreeds } = useDogBreeds();

  const refreshDogs = () => {
    setHasInitialLoad(false);
  };

  const value = {
    dogs,
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

export const useDogBreedsContext = () => {
  const context = useContext(DogBreedsContext);
  if (context === undefined) {
    throw new Error('useDogBreedsContext must be used within a DogBreedsProvider');
  }
  return context;
};