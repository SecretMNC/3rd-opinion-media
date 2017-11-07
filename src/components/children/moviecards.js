import React, { Component } from 'react';

export default class Moviecards extends Component {

    render() {
        var movie = this.state.list_of_movies.map((item, index)=> {
            return (
                <div>
                  <h1> {item.movie_title} </h1>
                  <h1> {item.title} </h1>
                  <h2> {item.sample_text} </h2>
                  <h2> {item.post_date} </h2>
                  <img src={`http://image.tmdb.org/t/p/w300${item.url}`} alt={`${item.movie_title}`} />
                </div>
            )
        })
    }
}