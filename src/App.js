import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Movies from './components/Lists/Movie_List';
import TVshows from './components/Lists/TVshows_List';
import Anime from './components/Lists/Anime/Anime_List';
import VideoGames from './components/Lists/VideoGames/VideoGame_List';
import Bios from './components/Users/Bios';
import Review from './components/children/Review';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Home}/>
            <Route path='/Movies' component={Movies}/>
            <Route path='/TVshows' component={TVshows}/>
            <Route path='/Anime' component={Anime}/>
            <Route path='/VideoGames' component={VideoGames}/>
            <Route path='/Bios' component={Bios}/>
            <Route path='/Review(:article)' component={Review}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
