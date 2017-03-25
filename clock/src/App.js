import React, { Component } from 'react';
import NavBar from './NavBar';
import Clock from './Clock';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Clock />
      </div>
    );
  }
}

export default App;