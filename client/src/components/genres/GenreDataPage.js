import React from 'react'
import { Link } from 'react-router-dom'
import './genres.css'

export default class GenreDataPage extends React.Component {
    render(){
        return(
            <div id='genres-container'>
                {this.props.genres.map(( genre, i) => {
                    return(
                        <Link key={i} to={`Selected-Genre/${genre.id}`}>
                        <div key={genre.id} className='genre-name-box'>{genre.name}</div>
                        </Link>
                    )
                })}
            </div>
        )
    }
}