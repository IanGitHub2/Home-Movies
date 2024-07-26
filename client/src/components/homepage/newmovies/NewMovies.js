import React from 'react';
import { Link } from 'react-router-dom';
import './newmovies.css'


export default class NewMovies extends React.Component {
    render(){
        return( 
          this.props.newMovies != null ?

          <div id="movie-container">
            <div className="movie-s-container">
                {this.props.newMovies.map((movie, i) => { 
                  return(
                    <div key={movie.id} className="each-movie">
                        <div id="movie-box">
                          <div id="movie-title">{ movie.title}</div>
                          <Link to={`Single-Post/${movie.id}`}>
                            <img id="movie-img" src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt="Movie cover art"/>
                          </Link>
                          <div id="overlay-text">
                            <div id="movie-des">{movie.overview}</div>
                          </div>
                        </div>
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