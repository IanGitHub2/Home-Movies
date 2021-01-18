import React, { Component } from 'react'
//import axios from 'axios'
//import { Link } from 'react-router-dom'
import './moviehomepage.css'
import TopNavBar from './TopNavBar'
import NewTrailer from './NewTrailer'
import NewMovies from './NewMovies'
import Trending from './Trending'
import BottomNavBar from './BottomNavBar'

const api_url_new_movies = "https://api.themoviedb.org/3/movie/now_playing?api_key=6f6374633eb8fa4d6e17d7fe0c8abcf8&language=en-US&page=1";
const api_url_popular_movies = "https://api.themoviedb.org/3/movie/popular?api_key=6f6374633eb8fa4d6e17d7fe0c8abcf8&language=en-US&page=1";


export default class MovieHomePage extends Component {

    state = {
        newMovies: [],
        popularMovies: []
    }

    componentDidMount() {
        fetch(api_url_new_movies)
        .then((res) => res.json())
        .then( results => { 
            this.setState({ newMovies: results.results });
            console.log(results)
        })

        fetch(api_url_popular_movies)
        .then((res) => res.json())
        .then( results => { 
            this.setState({ popularMovies: results.results });
            console.log(results)
        })
    }

    render() {
        return (
            <div>
                <TopNavBar/>
                <NewTrailer/>
                <NewMovies newMovies={this.state.newMovies}/>
                <Trending popularMovies={this.state.popularMovies}/>
                <BottomNavBar/>
            </div>
        )
    }
}