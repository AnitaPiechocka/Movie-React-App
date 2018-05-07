import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import SocialBar from './SocialBar';

const API_KEY = '3a09069e0a21ddcf36342eae363d3562';

class App extends Component {
  state = {
    movies: [],
  };

  getMovies = (query) => {
    axios
      .get(`https://api.themoviedb.org/3/movie?api_key=3a09069e0a21ddcf36342eae363d3562&language=en-US&query="${query}`)
      .then((data) => {
        const { movies } = data.data;
        this.setState({ movies });
      });
  };

  render() {
    return (
      <div className="main-bar">
        <SearchBar getMovies={this.getMovies} />
        <SocialBar />
      </div>
    );
  }
}

export default App;
