import React, { Component } from 'react';
import '../../App.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
          <Navbar />
          <div className="home-buttons">

          <Link to='/'  className='item item1'><p>Latest Review</p></Link>
          <Link to='/' className='item item2'><p>Classic Review</p></Link>
          <Link to='/bios' className='item item3'><p>Meet the Reviewers</p></Link>
          <Link to='/Movies' className='item item4'><p>Browse</p></Link>

          </div>
        </div>  
    );
  }
}

export default Home;
