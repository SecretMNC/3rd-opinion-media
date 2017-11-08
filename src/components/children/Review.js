import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import './Review.css';
import Navbar from '../Navbar/Navbar';

export default class Review extends Component {

    constructor() {
        super()

        this.state = {
            reviewName: 'American Made: Aggressively Average',
            reviewer: 'Kyle Zollinger'
        }
    }

    componentDidMount() {
        axios.get(`/api/reviews/${this.state.reviewName}`).then(response => {

        })
    }

    render() {
        return (
            <div className='master'>
                <Navbar />
                <div className='review-container'>

                    <h1 className='title'>{this.state.reviewName}</h1>
                    <h1 className='title'>{this.state.reviewer}</h1>
                    <img src='' alt=''/>

                </div>
            </div>
        )
    }
}