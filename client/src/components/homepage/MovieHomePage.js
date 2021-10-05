import React, { Component } from 'react'
// import { themoviedb } from '../../lib/theMoviedb'
//import axios from 'axios'
//import { Link } from 'react-router-dom'
import './moviehomepage.css'
import TopNavBar from '../navbars/TopNavBar'
import NewTrailer from './NewTrailer'
import NewMovies from './NewMovies'
import Trending from './Trending'
import BottomNavBar from '../navbars/BottomNavBar'



const api_url_new_movies = `https://api.themoviedb.org/3/movie/now_playing?api_key=6f6374633eb8fa4d6e17d7fe0c8abcf8&language=en-US&page=1`;
const api_url_popular_movies = `https://api.themoviedb.org/3/movie/popular?api_key=6f6374633eb8fa4d6e17d7fe0c8abcf8&language=en-US&page=1`;



export default class MovieHomePage extends Component {

    state = {
        newMovies: [],
        popularMovies: []
    }

    componentDidMount() {console.log(themoviedb)
        fetch(api_url_new_movies)
        .then((res) => res.json())
        .then( results => { 
            this.setState({ newMovies: results.results });
            //console.log(results)
        }).catch(error => {
            console.log(error)
        })

        fetch(api_url_popular_movies)
        .then((res) => res.json())
        .then( results => { 
            this.setState({ popularMovies: results.results });
            //console.log(results)
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                <TopNavBar/>
                <NewTrailer/>
                <section className='movie-scroll-section'>
                    <NewMovies newMovies={this.state.newMovies}/>
                    <Trending popularMovies={this.state.popularMovies}/>
                </section>
                <BottomNavBar/>
            </div>
        )
    }
}