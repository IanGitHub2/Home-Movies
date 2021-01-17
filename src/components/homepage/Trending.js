import React from 'react'
import './trending.css'
//import { Component } from 'react';

export default class Trending extends React.Component {
    render() {
        return(
            <div>
                <div className="new-movie-genre-title">Trending Movies</div>
                {this.props.popularMovies.map((movie, i) => {
                    return(
                        <div><img className="top-trending-movie" src={movie.poster_path} alt="Movie cover art"/>
                            <div className="top-trending-container ">
                                <div className="top-trending-box">
                                <img className="top-trending-movie" src={movie.poster_path} alt="Movie cover art"/>
                                <div className="top-trending-movie-title">{movie.title}</div>
                                </div>
                            </div>
                        </div>
                    )
                 })}
            </div>
        )
    }
}