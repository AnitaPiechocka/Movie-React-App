import React, { Component } from 'react';
import Axios from 'axios';
import SearchBar from './SearchBar';
import SocialBar from './SocialBar';
import LeftArrow from './LeftArrow.js';
import RightArrow from './RightArrow.js';
import Dots from './Dots.js';
import Slide from './Slide.js';

const API_KEY = '3a09069e0a21ddcf36342eae363d3562';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      slideCount: 0,
      howMany: 3,
      dots: [],
      movies:[]
    }

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.dot = this.dot.bind(this);
  }
  getMovies = (query) => {
    Axios
      .get(`https://api.themoviedb.org/3/movie/157336?api_key={3a09069e0a21ddcf36342eae363d3562}&append_to_response=${query}`)
      .then((data) => {
        const { movies } = data.data;
        this.setState({ movies });
      });
  };
  goToSlide(index) {
    this.setState({ slideCount: index });
  }

  nextSlide() {
    if (this.state.slideCount === (this.state.howMany - 1)) {
      this.setState({ slideCount: this.state.slideCount = 0 })
    } else {
      this.setState({ slideCount: this.state.slideCount + 1 })
    }

  }
  previousSlide() {
    if (this.state.slideCount === 0) {
      this.setState({ slideCount: this.state.slideCount = this.state.howMany - 1 })
    } else {
      this.setState({ slideCount: this.state.slideCount - 1 })
    }

  }

  dot() {
    for (let i = 0; i < this.state.howMany; i++) {
      if (i == this.state.slideCount) {
        this.state.dots.push(<i class="fas fa-circle dot"></i>)
      } else {
        this.state.dots.push(<i class="far fa-circle dot"></i>)
      }
    }
  }

  render() {
    return (
      <div>
        <div className="main-bar">
          <SearchBar getMovies={this.getMovies} />
          <SocialBar />
        </div>

        <div className='slider'>

          <Slide
            index={this.state.slideCount}
            className='slide'
          />

          <RightArrow nextSlide={this.nextSlide} />
          <LeftArrow previousSlide={this.previousSlide} />

        </div>
      </div>
    );
  }
}

export default App;
