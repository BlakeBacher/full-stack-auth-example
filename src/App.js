import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Router from './Router';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    return (
      <HashRouter>
        <Router />
      </HashRouter>
    );
  }
}

export default App;
