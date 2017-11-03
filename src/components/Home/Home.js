import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import reel from '../../assets/movieicon.png';

class Home extends Component {

  constructor() {
    super()

    this.state = {
      latest_title: '',
      latest_poster_id: [],
      latest_reviewer: ['loading'] 
    }
  }

componentDidMount() {
  axios.get(`http://localhost:8080/api/reviews/movies/`).then(response => {
    console.log(response)
    this.setState({
      latest_title: response.data[0].title,
      latest_reviewer: response.data[0].user_id,
      latest_poster_id: response.data[0].poster_id
    })
  })

}

  render() {
    return (
        <div className="all">
          <Navbar />
          <div className="home-buttons">

          <Link to='/'  className='item item1'><p>Latest Review</p><p>{this.state.latest_title}</p><p>{this.state.latest_reviewer}</p><p>{this.state.latest_poster_id}</p></Link>
          <Link to='/' className='item item2'><p>Classic Review</p></Link>
          <Link to='/bios' className='item item3'><p>Meet the Reviewers</p></Link>
          <Link to='/Movies' className='item item4'><p>Browse</p></Link>
          <img src={reel} alt='login' className="filmReel" />
          </div>
        </div>  
    );
  }
}

export default Home;
