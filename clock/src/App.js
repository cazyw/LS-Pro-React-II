import React, { Component } from 'react';
import NavBar from './NavBar';
import Clock from './Clock';
import Acknowledgement from './Acknowledgement';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Clock />
        <Acknowledgement />
      </div>
    );
  }
}

export default App;
