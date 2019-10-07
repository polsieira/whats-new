import React, { Component } from 'react';
import './App.scss';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import NewsContainer from '../NewsContainer/NewsContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        local: [],
        health: [],
        entertainment: [],
        science: [],
        technology: []
      },
      currentCategory: [],
      displayedArticles: []
    }
  }

  componentDidMount() {
    const url = 'https://whats-new-api.herokuapp.com/api/v1/news';
    fetch(url)
      .then(data => data.json())
      .then(data => this.setState({
        data: {
          local: data.local,
          health: data.health,
          entertainment: data.entertainment,
          science: data.science,
          technology: data.technology
        },
        currentCategory: data.local,
        displayedArticles:
          data.local
      }
      ))
      .catch(error => console.log(error))
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
          <NewsContainer displayedArticles={this.state.displayedArticles} />
        </div>
      </div>
    );
  }
}

export default App;
