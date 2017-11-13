import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Lists from './components/Lists/Lists';
import TVshows from './components/Lists/TVshows_List';
import Anime from './components/Lists/Anime/Anime_List';
import VideoGames from './components/Lists/VideoGames/VideoGame_List';
import Bios from './components/Users/Bios';
import Movie_Review from './components/children/Movie_Review';
import Input from './components/input.js';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Home}/>
            <Route path='/list/:media' component={Lists}/>
            {/* <Route path='/list2/:media' component={Lists}/>
            <Route path='/list3/:media' component={Lists}/>
            <Route path='/list4/:media' component={Lists}/> */}
            <Route path='/Bios' component={Bios}/>
            <Route path='/Movies/:article/' component={Movie_Review}/>
            <Route path='/input' component={Input}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
