import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import './Review.css';
import Navbar from '../Navbar/Navbar';

export default class Review extends Component {

    constructor(props) {
        super(props)

        this.state = {
            reviewName: this.props.match.params.article,
            reviewer: 'Kyle Zollinger',
            rating: '',
            posterUrl: [],
            date: '',
            review: ''
        }
    }

    componentDidMount() {
        axios.get(`/api/reviews/${this.state.reviewName}`).then(response => {
            console.log(response)
            this.setState({
                rating: response.data[0].rating,
                date: response.data[0].post_date,
                posterUrl: response.data[0].url,
                reviewer: response.data[0].full_name,
                review: response.data[0].review
            })
        })
    }

    render() {
        console.log(this.props.match.params.article)
        const parsedReview = this.state.review.split('\n').map((line, i) => {
            return <p className='review' key={i}>{line}<br /></p>
        })
        var date = `${this.state.date}`.substring(0, 10)
        return (
            <div className='master'>
                <Navbar />
                <div className='review-container'>

                    <h1 className='title'>{this.state.reviewName}</h1>
                    <h1 className='title'>{this.state.reviewer}</h1>
                    <h1 className='rating'>{this.state.rating}/10 </h1>
                    <img src={`http://image.tmdb.org/t/p/w300${this.state.posterUrl}`}alt='' className='poster'/>
                    <h1 className='title'>{date}</h1>
                    {parsedReview}

                </div>
            </div>
        )
    }
}