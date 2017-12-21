import React, { Component } from 'react';
import Home from './Home';
import Faves from './Faves'
import '../App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Faves />
      </div>
    );
  }
}

export default App;
