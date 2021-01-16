import React, { Component } from 'react'
//import axios from 'axios'
//import { Link } from 'react-router-dom'
import './moviehomepage.css'
import TopNavBar from './TopNavBar'
import NewTrailer from './NewTrailer'
import NewMovies from './NewMovies'
import BottomNavBar from './BottomNavBar'

const api_url = "https://api.themoviedb.org/3/movie/now_playing?api_key=6f6374633eb8fa4d6e17d7fe0c8abcf8&language=en-US&page=1";

export default class MovieHomePage extends Component {

    state = {
        newMovies: [[]]
    }

    componentDidMount() {
        fetch(api_url)
        .then((res) => res.json())
        .then( results => { 
            this.setState({ newMovies: results.results });
            console.log(results)
        })
    }
    
  
        // async getGenres() {
        //     const res = await fetch(api_url);
        //     const data = await res.json();
        //     const { results } = data;
        //     // for(let i = 0; i < results.length; i++){
        //     //     //this.setState( results[i].id )
        //     //     //this.setState( results[i].backdrop_path )
        //     //     this.setState( results[i].original_title )
        //     // }
        //  } 

    render() {
        return (
            <div id="body-css">
                <TopNavBar/>
                <NewTrailer/>
                <NewMovies newMovies={this.state.newMovies}/>
                <BottomNavBar/>
            </div>
        )
    }
}