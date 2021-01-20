import React from 'react'
import './trending.css'
//import { Component } from 'react';

export default class Trending extends React.Component {
    render() {
        return(
            <div className='trending-container'>
                <div className="new-movie-genre-title">Trending Movies</div>
                {this.props.popularMovies.map((movie, i) => {
                    return(
                        <div className="each_movie">
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt="Movie cover art"/>
                                <div>{movie.title}</div>
                            </div>
                        </div>
                    )
                 })}
            </div>
        )
    }
}