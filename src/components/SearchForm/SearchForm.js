import React, { Component } from 'react';
import './SearchForm.scss';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    }
  }

  handleSearch = event => {
    if (event.keyCode === 13 || event.target.className === "button--search") {
      event.preventDefault();
      this.props.searchArticles(this.state.search);
      this.resetState();
    }
  }

  resetState = () => {
    this.setState({
      search: ""
    })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <header className="SearchForm" >
        <input
          className="input--search"
          placeholder="Search for news articles here..."
          name="search"
          value={this.state.search}
          onChange={event => this.handleChange(event)}
          onKeyDown={event => this.handleSearch(event)}>
        </input>
        <button
          className="button--search"
          onClick={event => this.handleSearch(event)}>
          Search Now
        </button>
      </header>
    )
  }
}

export default SearchForm;