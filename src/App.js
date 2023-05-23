import React from 'react';
import { SearchProvider } from './components/search/SearchContext';
import Search from './components/search/Search';
import Searches from './components/search/Searches';
import './index.css'

function App() {
  return (
    <div className="app">
      <SearchProvider>
        <div className="App">
          <Search />
          <Searches />
        </div>
      </SearchProvider>
    </div>
  );
}

export default App;
