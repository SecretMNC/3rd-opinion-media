import React, { Component } from 'react';
import './Lists.css';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class Lists extends Component {

    constructor() {
        super()

        this.state = {
            list: ['loading...']
        }
    }

    componentDidMount() {
        axios.get('/api/reviews/movies/').then(response => {
            // console.log(response)
            this.setState({
                list: response.data
            })
        })
    }

    render() {
        var movie = this.state.list.map((item, index) => {
            var date = `${item.post_date}`.substring(0, 10);
            return (
                <div key={index} className='list-container'>
                    <Link to={`/movies/${item.title}`}>
                        <h1> {item.movie_title} </h1>
                        <h2> {item.title} </h2>
                        <h3> {item.sample_text} </h3>
                        <h4> {date} </h4>
                        <img src={`http://image.tmdb.org/t/p/w300${item.url}`} alt={`${item.movie_title}`} className='poster' />
                    </Link>
                </div>
            )
        })
        return (
            <div className='master'>
                <Navbar />
                {movie}
            </div>
        )
    }
}