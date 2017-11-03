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
      latestInput: 'Blade Runner 2049',
      latest_title: '',
      latest_poster_url: '',
      latest_reviewer: ['loading']
    }
  }

  componentDidMount() { //Latest Review box
    axios.get(`http://localhost:8080/api/reviews/movies/`).then(response => {
      // console.log(response)
      this.setState({
        latest_title: response.data[0].title,
        latest_reviewer: response.data[0].full_name
      })
    })

    //getting poster image
     axios.get(`http://localhost:8080/api/info/${this.state.latestInput}`).then(response => {
        // console.log(response)
        this.setState({
          latest_poster_url: this.state.latest_poster_url + [response.data[0].url]
        })
      })
    

  };

 
  render() {
    return (
      <div className="all">
        <Navbar />
        <div className="home-buttons">

          <Link to='/' className='item item1'><p>Latest Review</p><p>{this.state.latest_title}</p><p>{this.state.latest_reviewer}</p>
          
          <img src={`http://image.tmdb.org/t/p/w300${this.state.latest_poster_url}`} alt={`${this.state.latestInput}`} className='image1'/></Link>
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
