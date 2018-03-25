import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SillyComponent from "./SillyComponent";
import Switch from "./Switch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <Switch /> */}
        <SillyComponent />
      </div>
    );
  }
}

export default App;
