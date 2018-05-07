import React, { Component } from 'react';

class SocialBar extends Component {
  render() {
    return (
      <div className="social-bar">
        <div className="social-bar-item"><a href="https://www.facebook.com" className="fab fa-facebook" /></div>
        <div className="social-bar-item"><a href="https://twitter.com" className="fab fa-twitter" /></div>
        <div className="social-bar-item"><a href="https://www.youtube.com" className="fab fa-youtube" /></div>
        <div className="social-bar-item"><a href="https://www.instagram.com" className="fab fa-instagram" /></div>
      </div>
    );
  }
}

export default SocialBar;
