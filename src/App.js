import React from 'react';
import Search from './components/Search';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from './components/Index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;