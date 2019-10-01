import React, { Component } from 'react';
import local from '../../data/local';
import health from '../../data/health';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.scss';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import NewsContainer from '../NewsContainer/NewsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        local,
        health,
        entertainment,
        science,
        technology
      },
      currentTab: local
    }
  }

  changeState(newState) {
    this.setState({
      data: {
        local,
        health,
        entertainment,
        science,
        technology
      },
      current: newState
    });
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <div className="wrapper--news">
          <SearchForm />
          <NewsContainer currentTab={this.state.currentTab} />
        </div>
      </div>
    );
  }
}

export default App;
