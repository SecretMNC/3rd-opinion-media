import React, { Component } from 'react';
import axios from 'axios';
import './input.css';
import Navbar from './Navbar/Navbar';

export default class Input extends Component {

    constructor() {
        super()

        this.state = {
            imageURL: 'https://buzz.tt/media/posters/1772/posters_2_1500.jpg',
            title: 'e.g. Geostorm is the worst movie ever! (max 84 characters)',
            mediaType: 'Movie',
            name: 'e.g. Geostorm',
            rating: '0',
            review: 'Review goes here (make sure to press "enter" twice between paragraphs)'
        }
    };


    updateImageURL(e) {
        this.setState({
            imageURL: e.target.value
        });
    };

    updateTitle(e) {
        this.setState({
            title: e.target.value
        });
    };

    updateMedia(e) {
        this.setState({
            mediaType: e.target.value
        });
    };

    updateName(e) {
        this.setState({
            name: e.target.value
        });
    };

    updateRating(e) {
        this.setState({
            rating: e.target.value
        });
    };

    updateReview(e) {
        this.setState({
            review: e.target.value
        });
    };

    submit() {
    
        axios.post(`/api/input/${this.state.mediaType}`, {
            imageURL: this.state.imageURL,
            title: this.state.title,
            mediaType: this.state.mediaType,
            name: this.state.name,
            rating: this.state.rating,
            review: this.state.review,
            sample: this.state.review.substr(0, 150).concat('...')
        })
            .then(response => {
                alert(`You have successfully submitted your review, ${this.state.title}!`);
            }).catch(err => {
                alert('The review was not submitted.  Either you are not an authorized user or there is a field unfilled. Please check all fields or log back in.')
            });
    };


    render() {
        return (
            <div>
                <Navbar />
                <div className='inputs'>

                    <h1>Submit your Review</h1>
                    <h2>Step 1: Copy/Paste a link to the poster/cover art of what you are reviewing.</h2>
                    <input type='text'
                        className='userBox'
                        placeholder={this.state.imageURL}
                        onChange={this.updateImageURL.bind(this)} />
                    
                    
                    <h2>Step 2: Title of your review </h2>
                    <input type='text'
                        className='titleBox'
                        placeholder={this.state.title}
                        onChange={this.updateTitle.bind(this)} />

                    <h2>Step 3: What type of media are you reviewing?</h2>
                    <select defaultValue={this.state.mediaType} onChange={this.updateMedia.bind(this)} className='mediaType'>
                        <option value='Movie'>Movie</option>
                        <option value='TVshow'>T.V. Show</option>
                        <option value='Anime'>Anime</option>
                        <option value='Videogame'>Video Game</option>
                    </select>

                    <h2>Step 4: What is the title of thing you are reviewing?</h2>
                    <h2>Try to use the official spelling of the title.</h2>
                    <input type='text'
                        className='nameBox'
                        placeholder={this.state.name}
                        onChange={this.updateName.bind(this)} />

                    <h2>Step 5: What rating out of 10 do you give it? e.g. 6.75</h2>
                    <input type='text'
                        className='ratingBox'
                        placeholder={this.state.rating}
                        onChange={this.updateRating.bind(this)} />

                    <h2>Step 6: </h2>
                    <textarea type='text'
                        className='reviewBox'
                        value={this.state.review}
                        onChange={this.updateReview.bind(this)} />

                    <button title='Submit'
                        className='submitButton'
                        onClick={this.submit.bind(this)}>Submit</button>



                </div>


            </div>
        )
    }
};