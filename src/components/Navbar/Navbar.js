import React, { Component } from 'react';
import './Navbar.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HamburgerMenu from '../material-ui/HamburgerMenu';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="navbar">

                    <HamburgerMenu />
                    <Link to='/' className='title'><p>3rd Opinion Media</p></Link>
                    <p className='welcome'>Welcome!</p>

                </div>
            </MuiThemeProvider>
        )
    }
}