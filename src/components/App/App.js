import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import NewsContainer from '../NewsContainer/NewsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <SearchForm />
        <NewsContainer local={this.state.local} />
      </div>
    );
  }
}

export default App;
