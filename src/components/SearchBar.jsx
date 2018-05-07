import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    text: '',
  }

  updateText = (e) => {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div className="search-bar">
        <input
          className="form-control search-bar"
          type="text"
          value={this.state.text}
          onChange={e => this.setState({ text: e.target.value })}
          placeholder="Szukaj filmów"
        />
        <i className="fas fa-search" />
      </div>
    );
  }
}

export default SearchBar;
