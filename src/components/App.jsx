import React, { Component } from 'react';
import Axios from 'axios';
import SearchBar from './SearchBar';
import SocialBar from './SocialBar';

const API_KEY = '3a09069e0a21ddcf36342eae363d3562';

class App extends Component {
  state = {
    movies: [],
  };

  getMovies = (query) => {
    Axios
      .get(`https://api.themoviedb.org/3/movie/157336?api_key={3a09069e0a21ddcf36342eae363d3562}&append_to_response=${query}`)
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
