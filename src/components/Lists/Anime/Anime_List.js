import React, { Component } from 'react';
import '../Lists.css';
import Navbar from '../../Navbar/Navbar';

export default class Anime extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <p>Anime List</p>
            </div>
        )
    }
};