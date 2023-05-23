import React, { useState, useContext } from 'react';
import { SearchContext } from './SearchContext';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import TextareaAutosize from 'react-textarea-autosize';
import './Search.css';

const Search = () => {
  const { searches, setSearches } = useContext(SearchContext);
  const [input, setInput] = useState('');
  const [rows, setRows] = useState(1);

  const handleInput = (e) => {
    setInput(e.target.value);
    setRows(e.target.scrollHeight / 20); // Assumes a line height of ~20px
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let sanitizedInput = input.trim();
    if (!/[\w]/.test(sanitizedInput)) {  // checks if there's no alphanumeric character
      return;
    }
    sanitizedInput = sanitizedInput.replace(/\n{3,}/g, '\n\n');  // replace more than two line breaks with two
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
      {/* <textarea 
        rows={rows} 
        className="search-field" 
        value={input} 
        onChange={handleInput} 
        onKeyDown={handleKeyDown} 
        placeholder="Search" 
      /> */}

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
