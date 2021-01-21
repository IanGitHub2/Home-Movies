import React from 'react'
import './genres.css'

export default class GenreDataPage extends React.Component {
    render(){
        return(
            <div id='genres-container'>
                {this.props.genres.map(( genre, i) => {
                    return(
                        <div key={genre.id} className='genre-name-box'>{genre.name}</div>
                    )
                })}
            </div>
        )
    }
}