import React from 'react'
import './trending.css'
import { Link } from 'react-router-dom'


export default class Trending extends React.Component {
    render() {
        return(
            <div>
                <div className="new-movie-genre-title">Trending Movies</div>
                <div id='trending-container' className="movie-middle-section-container">
                    {this.props.popularMovies.map((movie, i) => {
                        return(
                            <div className="each_movie" key={movie.id}>
                                <Link to={`Single-Post/${movie.id}`}>
                                    <div id="trending-box">
                                        <img id="trending-img" src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt="Movie cover art"/>
                                        <div id="overlay-trending-text">
                                            <div id="trending-title">{movie.title}</div>
                                            <div id="trending-des">{movie.overview}</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}