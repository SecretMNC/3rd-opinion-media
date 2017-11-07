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
        var movie = this.state.list_of_movies.map((item, index)=> {
            var date = `${item.post_date}`.substring(0,10)
            return (
                <div key={index}>
                  <h1> {item.movie_title} </h1>
                  <h1> {item.title} </h1>
                  <h2> {item.sample_text} </h2>
                  <h2> {date} </h2>
                  <img src={`http://image.tmdb.org/t/p/w300${item.url}`} alt={`${item.movie_title}`} />
                </div>
            )
        })
        return (
            <div>
                <Navbar />
                {movie}
            </div>
        )
    }
}