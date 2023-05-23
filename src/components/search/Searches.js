import React, { useContext } from 'react';
import { SearchContext } from './SearchContext';
import './Search.css';

const Searches = () => {
  const { searches } = useContext(SearchContext);

  return (
    <div className="search-results">
      {searches.map((search, index) => {
        return (
        <div key={index} className="search-item">
          {search}
        </div>)
      })}

    </div>
  );
};

export default Searches;
