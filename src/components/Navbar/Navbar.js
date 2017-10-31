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
                    <p>3rd Opinion Media</p>
                    <p>Welcome!</p>

                </div>
                </MuiThemeProvider>
                    )
    }
}