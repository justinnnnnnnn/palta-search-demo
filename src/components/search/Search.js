import React, { useState, useContext } from 'react';
import { SearchContext } from './SearchContext';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import TextareaAutosize from 'react-textarea-autosize';
import './Search.css';

const Search = () => {
  const { searches, setSearches } = useContext(SearchContext);
  const [input, setInput] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    let sanitizedInput = input.trim();
    if (!/[\w]/.test(sanitizedInput)) {
      return;
    }
    sanitizedInput = sanitizedInput.replace(/\n{3,}/g, '\n\n'); 
    setSearches([...searches, sanitizedInput]);
    setInput('');
  };


  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit(e);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="search-container">
      <TextareaAutosize 
        className="search-field" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        onKeyDown={handleKeyDown} 
        placeholder="Search" 
      />
      <button type="submit" className="send-button"><IoPaperPlaneOutline /></button>
    </form>
  );
};

export default Search;
