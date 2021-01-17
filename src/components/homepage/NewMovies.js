import React from 'react';

export default class NewMovies extends React.Component {
  
    render(){
        return(
            <div>
              <div className="new-movie-genre-title">New Movies</div>
              {this.props.newMovies.map((movie, i) => { 
                return(
                  <div>
                    <div className="new-release-container">
                        <div className="new-release-movie-poster-box">
                          <img className="new-release-movie" src={movie.backdrop_path} alt="Movie cover art"/>
                          <div className="new-release-title">{ movie.title}</div>
                        </div>
                      </div>
                    </div>
                )
              })}

            </div>
        )
    }
}