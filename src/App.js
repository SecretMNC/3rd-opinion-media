import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Lists from './components/Lists/Lists';
import TVshows from './components/Lists/TVshows_List';
import Anime from './components/Lists/Anime/Anime_List';
import VideoGames from './components/Lists/VideoGames/VideoGame_List';
import Bios from './components/Users/Bios';
import Movie_Review from './components/children/Movie_Review';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Home}/>
            <Route path='/Lists' component={Lists}/>
            <Route path='/TVshows' component={TVshows}/>
            <Route path='/Anime' component={Anime}/>
            <Route path='/VideoGames' component={VideoGames}/>
            <Route path='/Bios' component={Bios}/>
            <Route path='/Movies/:article/' component={Movie_Review}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
