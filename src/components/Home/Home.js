import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import reel from '../../assets/movieicon.png';



class Home extends Component {

  constructor() {
    super()

    this.state = {
      latestInput: 'Latest Review',
      latest_movie_title: '',
      latest_title: '',
      latest_poster_url: '',
      latest_reviewer: [''],
      reviewers: []
    }
  }

  componentDidMount() { //Latest Review box
    axios.get(`http://localhost:8080/api/reviews/movies/latest/`).then(response => {
      // console.log(response)
      this.setState({
        latest_movie_title: response.data[0].movie_title,
        latest_title: response.data[0].title,
        latest_reviewer: response.data[0].full_name,
        latest_poster_url: response.data[0].url
      })
    })

    //getting poster image
   

  //   axios.get('/api/users').then(response => {
  //     this.setState({

  //     })
  //   })

  };


  render() {
    return (
      <div className="all">
        <Navbar />
        <div className="home-buttons">

          <Link to='/' className='item item1'>
            <div>
              <p className='content1'>{this.state.latest_movie_title}</p>
              <p className='content1'>{this.state.latest_title}</p>
              <p className='content1'>{this.state.latest_reviewer}</p>
            </div>
            <img src={`http://image.tmdb.org/t/p/w300${this.state.latest_poster_url}`} alt={`${this.state.latestInput}`} className='image1' /></Link>

          <Link to='/' className='item item2'>
            <p className='content2'>Classic Review</p>
          </Link>

          <Link to='/bios' className='item item3'>
            <p className='content1'>Meet the Reviewers</p>
          </Link>

          <Link to='/Movies' className='item item4'>
            <p className='content2'>Browse</p>
          </Link>

          <img src={reel} alt='login' className="filmReel" />
        </div>
      </div>
    );
  }
}

export default Home;
