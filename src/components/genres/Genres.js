import React from 'react'
import TopNavBar from '../navbars/TopNavBar'
import BottomNavBar from '../navbars/BottomNavBar'
import GenreDataPage from './GenreDataPage'

const api_url_genres = "https://api.themoviedb.org/3/genre/movie/list?api_key=6f6374633eb8fa4d6e17d7fe0c8abcf8&language=en-US"

export default class Genres extends React.Component {

    state = {
        genre: []
    }

    componentDidMount(){
        fetch(api_url_genres)
        .then((res) => res.json())
        .then(genres => {
            this.setState({ genre: genres.genres });
            console.log(genres)
        })
    }

    render() {
        return(
            <div id='genres-background'>
                <TopNavBar/>
                <GenreDataPage genres={this.state.genre}/>
                <BottomNavBar/>
            </div>
        )
    }
}