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
                                    <div>
                                        <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt="Movie cover art"/>
                                        <div>{movie.title}</div>
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