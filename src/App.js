import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Lists from './components/Lists/Lists';
import Bios from './components/Users/Bios';
import Review from './components/children/Review';
import Input from './components/input.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/list/:media' component={Lists} />
            {/* <Route path='/list2/:media' component={Lists}/>
            <Route path='/list3/:media' component={Lists}/>
            <Route path='/list4/:media' component={Lists}/> */}
            <Route path='/Bios' component={Bios} />
            <Route path='/review/:media/:article/' component={Review} />
            <Route path='/input' component={Input} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
