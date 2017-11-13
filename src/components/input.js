import React, { Component } from 'react';
import axios from 'axios';
import './input.css';
import Navbar from './Navbar/Navbar';

export default class Input extends Component {

    constructor() {
        super()

        this.state = {
            user: '',
            title: 'e.g. Geostorm is the worst movie ever! (max 84 characters)',
            mediaType: 'Movie',
            name: 'e.g. Geostorm',
            rating: '0',
            review: 'Review goes here (make sure to press "enter" twice between paragraphs)'
        }
    };


    updateUser(e) {
        this.setState({
            user: e.target.value
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
        // axios.get('/api/users').then(response => {
        //     this.setState({

        //     })
        // })

        axios.post(`/api/input/${this.state.mediaType}`, {
            user: this.state.user,
            title: this.state.title,
            mediaType: this.state.mediaType,
            name: this.state.name,
            rating: this.state.rating,
            review: this.state.review,
            sample: this.state.review.substr(0, 150).concat('...')
        })
            .then(response => {
                alert(`You have successfully submitted your review, ${this.state.title}!`);
            });
    };


    render() {
        return (
            <div>
                <Navbar />
                <div className='inputs'>

                    <h1>Submit your Review</h1>
                    <h2>Step 1: What is your ID? e.g. 1</h2>
                    <input type='text'
                        className='userBox'
                        defaultValue={this.state.user}
                        onChange={this.updateUser.bind(this)} />
                    <ul className='idList'>ID guide:
                    <li>Stephen Moore = 1</li>
                        <li>Kevin Pett = 2</li>
                        <li>Robby Moore = 3</li>
                        <li>Kyle Zollinger = 4</li>
                        <li>Emily Moore = 5</li>
                        <li>Tyrone Johnson = 7</li>
                    </ul>
                    <h2>Step 2: Title of your review </h2>
                    <input type='text'
                        className='titleBox'
                        value={this.state.title}
                        onChange={this.updateTitle.bind(this)} />

                    <h2>Step 3: What type of media are you reviewing?</h2>
                    <select defaultValue={this.state.mediaType} onChange={this.updateMedia.bind(this)} className='mediaType'>
                        <option value='Movie'>Movie</option>
                        <option value='TVshow'>T.V. Show</option>
                        <option value='Anime'>Anime</option>
                        <option value='Videogame'>Video Game</option>
                    </select>

                    <h2>Step 4: What is the title of thing you are reviewing?</h2>
                    <h2>***IMPORTANT*** use the exact, official spelling!</h2>
                    <input type='text'
                        className='nameBox'
                        value={this.state.name}
                        onChange={this.updateName.bind(this)} />

                    <h2>Step 5: What rating out of 10 do you give it? e.g. 6.75</h2>
                    <input type='text'
                        className='ratingBox'
                        value={this.state.rating}
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