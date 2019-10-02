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
      currentCategory: local,
      displayedArticles: local
    }
  }

  changeState = (event) => {
    this.setState({
      currentCategory: this.state.data[event.target.id],
      displayedArticles: this.state.data[event.target.id]
    });
  }

  searchArticles = searchedText => {
    let searchedArticles = this.state.currentCategory.filter(article => {
      return (
        article.headline.toUpperCase().includes(searchedText.toUpperCase()) ||
        article.description.toUpperCase().includes(searchedText.toUpperCase())
      )
    });

    this.setState({
      displayedArticles: searchedArticles
    })
  }

  render() {
    return (
      <div className="App">
        <Menu changeState={this.changeState} />
        <div className="wrapper--news">
          <SearchForm searchArticles={this.searchArticles} />
          <NewsContainer currentTab={this.state.displayedArticles} />
        </div>
      </div>
    );
  }
}

export default App;
