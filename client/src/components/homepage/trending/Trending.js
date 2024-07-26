import React from 'react'
import './trending.css'
import { Link } from 'react-router-dom'


export default class Trending extends React.Component {
    render() {
        return(
            this.props.popularMovies != null ?

            <div id="trending-container">
                <div className="movie-t-s-container">
                    {this.props.popularMovies.map((movie, i) => {
                        return(
                            <div className="t-each-movie" key={movie.id}>
                                {/* <Link to={`Single-Post/${movie.id}`}> */}
                                    <div id="trending-box">
                                        <div id="trending-title">{movie.title}</div>
                                        <Link to={`Single-Post/${movie.id}`}>
                                            <img id="trending-img" src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt="Movie cover art"/>
                                        </Link>
                                        <div id="overlay-trending-text">
                                            <div id="trending-des">{movie.overview}</div>
                                        </div>
                                    </div>
                                {/* </Link> */}
                            </div>
                        )
                    })}
                </div>
            </div>
            :
            <div>loading....</div>
        )
    }
}