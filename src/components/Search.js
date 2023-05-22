import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import searchList from "./search_list";
import "./Search.css";

const SearchBar = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const getSearchResults = (checkFunc) => {
    return searchList.reduce((results, objectOfTickerAndName, i) => {
      if (checkFunc(objectOfTickerAndName)) {
        results.push(
          <span className="search-item" key={i}>
            <Link to={`/stonks/${objectOfTickerAndName.ticker}`} onClick={() => setInput('')} className="link-search">
              <div className="search-item-div">{objectOfTickerAndName.ticker}</div> 
              <div className="search-item-div">{objectOfTickerAndName.name}</div>
            </Link>
          </span>
        );
      }
      return results;
    }, []);
  };

  const searchFilter = () => {
    let inputUp = input.toUpperCase();
    let searchResult = [];

    if (input.length > 0) {
      searchResult = [
        ...searchResult,
        ...getSearchResults(object => object.ticker.startsWith(inputUp))
      ];

      if (searchResult.length < 8) {
        searchResult = [
          ...searchResult,
          ...getSearchResults(object => object.name.toUpperCase().startsWith(inputUp) && !object.ticker.startsWith(inputUp))
        ];
      }

      if (searchResult.length < 8) {
        searchResult = [
          ...searchResult,
          ...getSearchResults(object => (object.ticker.includes(inputUp) || object.name.toUpperCase().includes(inputUp)) &&
            !object.ticker.startsWith(inputUp) && !object.name.toUpperCase().startsWith(inputUp))
        ];
      }
    }

    return searchResult.slice(0, 8);
  }

  const buttonPress = (e) => {
    e.preventDefault();
    const searchResults = searchFilter();
    if (searchResults.length > 0) {
      navigate(searchResults[0].props.children.props.to);
      setInput('');
    }
  }

  return (
    <div className="search-container">  
      <div className="search-bar">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <form autoComplete="off" className="search-form" onSubmit={buttonPress}>
          <i className="fa fa-search"/>
          <input className="search-field" type="search" name="input" value={input} onChange={e => setInput(e.target.value)} placeholder="Search" />
          <div className="hide-this-button"><button type="submit"></button></div>
          <br />
          <div className="search-dropdown"> {searchFilter()}</div>
        </form>
      </div>
    </div>
  )
}

export default SearchBar;
