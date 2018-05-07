import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    text: '',
  };

  updateText = (e) => {
    this.setState({ text: e.target.value });
  };

  checkIfSend = (e) => {
    if (e.key === 'Enter') {
      this.props.getMovies(this.state.text);
    }
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          className="form-control search-bar"
          placeholder="Szukaj filmów"
          value={this.state.text}
          onChange={e => this.setState({ text: e.target.value })}
          onKeyPress={this.checkIfSend}
        />
        <i className="fas fa-search" />
      </div>
    );
  }
}

export default SearchBar;
