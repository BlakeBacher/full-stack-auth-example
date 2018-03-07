import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="info-container">
        <h1>Home Page</h1>
        <Link to="/private">Private</Link>
      </div>
    )
  }
}
