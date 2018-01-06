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

  componentWillMount() { //Latest Review box
    axios.get(`/api/reviews/movies/latest/`).then(response => {
      // console.log(response.data[0].title)
      this.setState({
        latest_movie_title: response.data[0].movie_title,
        latest_title: response.data[0].title,
        latest_reviewer: response.data[0].full_name,
        latest_poster_url: response.data[0].url
      })
    }).catch(err => console.log('Failed to get review info', err))

    axios.get('http://localhost:8080/api/bios/').then(response => {
      // console.log(response)
      this.setState({
        reviewers: response.data
      })
    })
  };


  render() {
    return (
      <div className="all">
        <Navbar />
        {/* The clickable boxes in the main landing page */}
        <div className="home-buttons">

          {/* */}
          <Link to={`/review/movies/${this.state.latest_title}`} className='item item1'>
            {/* */}
            <div className='content1'>
              <p>Latest Review:</p>
              <p>{this.state.latest_title}</p>
              <p>{this.state.latest_reviewer}</p>
            </div>
            {/* */}
            <img src={this.state.latest_poster_url} alt='Movie Poster' className='image1' />
          </Link>


          {/* */}
          <Link to='/bios' className='item item2'>

            <div className='content2'>
              <p>Meet the Reviewers</p>
              <section>
                <img src='https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/552640_448555625179154_1704907324_n.jpg?oh=893cfc0c13d29847c6be1ae66bca2205&oe=5AA238F7' alt='' height='60' width='60'/>
                <img src='https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/20031711_100263513969709_5813296811287710414_n.jpg?oh=453ab5ef97f7a782a130733b3e3c5dd2&oe=5A6BD2B5' alt='' height='60' width='60'/>
                <img src='https://scontent.fmkc1-1.fna.fbcdn.net/v/t1.0-9/20729263_10208427192591851_6143954254912329054_n.jpg?oh=ef9a37644f04b38095552b759c869c5e&oe=5AA2AD27' alt='' height='60' width='60'/>
                <img src='https://media.licdn.com/media/p/8/005/0b6/27f/3440b7e.jpg' height='60' width='60' alt=''/>
                <img src='https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAIA_wDGAAAAAQAAAAAAAAs4AAAAJGVjMDBhM2FiLTY5ZjAtNGU1NC1hYWVmLWEwMmM1NjFmOTE0Ng.jpg' alt='' height='60' width='60' />
              </section>
              
            </div>
          </Link>
          {/* */}
          <Link to='/list/movies' className='item item3'>
            <p className='content1'>Browse</p>
          </Link>
          {/* */}
          <a href={process.env.REACT_APP_LOGIN}> <img src={reel} alt='login' className="filmReel" /> </a>
        </div>
      </div>
    );
  }
}

export default Home;
