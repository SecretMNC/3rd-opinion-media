import React, { Component } from 'react';
import './Navbar.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HamburgerMenu from '../material-ui/HamburgerMenu';

export default class Navbar extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="navbar">

                    <HamburgerMenu />
                    <a href='/'><p>3rd Opinion Media</p></a>
                    <p className='welcome'>Welcome!</p>

                </div>
                </MuiThemeProvider>
                    )
    }
}