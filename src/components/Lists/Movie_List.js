import React, { Component } from 'react';
import './Lists.css';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
// import Moviecards from './moviecards';

export default class Movies extends Component {

    constructor() {
        super()

        this.state = {
            list_of_movies: ['']
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/reviews/movies/').then(response => {
            console.log(response)
            this.setState({
                list_of_movies: response.data
            })
        })
    }

    render() {
        var movie = this.state.list_of_movies.map((item, index) => {
            var date = `${item.post_date}`.substring(0, 10)
            return (
                    <div key={index} className='list-container'>
                        <h1><a href='/'> {item.movie_title} </a> </h1>
                        <h2><a href='/'> {item.title} </a></h2>
                        <h3><a href='/'> {item.sample_text} </a></h3>
                        <h4><a href='/'> {date} </a></h4>
                        <img src={`http://image.tmdb.org/t/p/w300${item.url}`} alt={`${item.movie_title}`} className='poster' />
                    </div>

            )
        })
        return (
            <div className ='master'>
                <Navbar />
                {movie}
            </div>
        )
    }
}