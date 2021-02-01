import React from 'react';
import { Link } from 'react-router-dom'
import './newmovies.css'

export default class NewMovies extends React.Component {
    render(){
        return(
          <div>
            <div className="new-movie-genre-title">New Movies</div>
            <div id="movie-container" className="movie-middle-section-container">
                {this.props.newMovies.map((movie, i) => { 
                  return(
                    <div className="each_movie">
                      <Link to={`./Single-Post/${movie.id}`}>
                        <div key={movie.id}>
                          <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt="Movie cover art"/>
                          <div>{ movie.title}</div>
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