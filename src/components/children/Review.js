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
            reviewer: '',
            rating: '',
            posterUrl: [],
            date: '',
            review: ''
        }
    }

    componentWillMount() {
        axios.get(`/api/getReview/${this.props.match.params.media}/${this.state.reviewName}/`).then(response => {
            this.setState({
                rating: response.data[0].rating,
                date: response.data[0].post_date,
                posterUrl: response.data[0].art_url,
                reviewer: response.data[0].full_name,
                review: response.data[0].review
            })
        })
    }

    render() {
        const parsedReview = this.state.review.split('\n').map((line, i) => {
            return <p className='review' key={i}>{line}<br /></p>
        })
       
        var date = `${this.state.date}`.substring(0, 10)
        return (
            <div className='master'>
                <Navbar />
                <div className='review-container'>

                    <h1>{this.state.reviewName}</h1>
                    <h1>By: {this.state.reviewer}</h1>
                    <h1 className='rating'>{this.state.rating}/10 </h1>
                    <img src={this.state.posterUrl} alt='' className='poster'/>
                    <h1>{date}</h1>
                    {parsedReview}
                    <h1 className='title'> </h1>
                    <h1 className='title'> </h1>

                </div>
            </div>
        )
    }
}