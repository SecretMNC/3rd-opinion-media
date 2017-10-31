import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/Navbar/Navbar';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="">
          <Navbar />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
