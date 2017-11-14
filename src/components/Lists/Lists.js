import React, { Component } from 'react';
import './Lists.css';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class Lists extends Component {

    constructor(props) {
        super(props)

        this.state = {
            list: ['loading...'],
            mediaType: this.props.match.params.media
        }
    }

    componentDidMount() {
        axios.get(`/api/reviews/${this.state.mediaType}/`).then(response => {
            // console.log(response)
            this.setState({
                list: response.data
            })
        })
    }

    componentWillReceiveProps(nextProps) { 
        axios.get(`/api/reviews/${nextProps.match.params.media}/`).then(response => {
            // console.log(response)
            this.setState({
                list: response.data
            })
        })
    }

 

    render() {
        var movie = this.state.list.map((item, index) => {
            var date = `${item.post_date}`.substring(0, 10);
            return (
                <div key={index} className='list-container'>
                    <Link to={`/review/${this.props.match.params.media}/${item.title}`} className='movieBox'>
                        <h1> {item.media_title} </h1>
                        <h2> {item.title} </h2>
                        <h3 className='sampleText'> {item.sample_text} </h3>
                        <h4> {date} </h4>
                        <img src={item.url} alt={`${item.movie_title}`} className='poster' />
                    </Link>
                </div>
            )
        })
        return (
            <div className='master'>
                <Navbar />
                {movie}
            </div>
        )
    }
}