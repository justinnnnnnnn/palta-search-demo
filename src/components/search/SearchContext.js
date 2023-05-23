import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searches, setSearches] = useState([]);

  return (
    <SearchContext.Provider value={{ searches, setSearches }}>
      {children}
    </SearchContext.Provider>
  );
};
