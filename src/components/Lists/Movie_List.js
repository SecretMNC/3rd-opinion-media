import React, { Component } from 'react';
import './Lists.css';
import Navbar from '../Navbar/Navbar';

export default class Movies extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <p>Movie List</p>
            </div>
        )
    }
}