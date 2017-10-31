import React, { Component } from 'react';
import './Navbar.css'
import { HashRouter, Route } from 'react-router-dom'
import HamburgerMenu from '../material-ui/HamburgerMenu';

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">

                <HamburgerMenu />
                <p>3rd Opinion Media</p>
                <p>Welcome!</p>

            </div>
        )
    }
}