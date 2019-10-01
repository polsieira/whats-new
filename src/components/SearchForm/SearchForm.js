import React from 'react';
import './SearchForm.scss';

const SearchForm = () => {
  return (
    <header className="SearchForm">
      <input
        className="input--search"
        placeholder="Search for news articles here...">
      </input>
      <button className="button--search">Search Now</button>
    </header>
  )
}

export default SearchForm;