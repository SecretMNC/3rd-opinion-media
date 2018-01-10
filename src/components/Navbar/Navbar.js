import React, { Component } from 'react';
import './Navbar.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HamburgerMenu from '../material-ui/HamburgerMenu';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        let width = window.innerWidth;
        if (width > 1199) {
            return (
                <MuiThemeProvider>
                    <div className="navbar">
                        <nav>
                            <Link to='/list/movies' className='links'>Movies</Link>
                            <Link to='/list/TVshows' className='links'>TV Shows</Link>
                            <Link to='/list/anime' className='links'>Anime</Link>
                            <Link to='/list/videogames' className='links'>Video Games</Link>
                            <Link to='/Bios' className='links'>The Reviewers</Link>
                        </nav>
                        <Link to='/' className='title'><p>3rd Opinion Media</p></Link>
                        <p className='welcome'>Welcome!</p>

                    </div>
                </MuiThemeProvider>
            )
        } else {
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
}