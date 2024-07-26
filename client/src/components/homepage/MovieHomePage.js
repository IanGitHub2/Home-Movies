import React, { useState, useEffect } from 'react'
// import { themoviedb } from '../../lib/theMoviedb'
//import axios from 'axios'
//import { Link } from 'react-router-dom'
import './moviehomepage.css'
import TopNavBar from '../navbars/TopNavBar'
import NewTrailer from './newtrailer/NewTrailer'
import NewMovies from './newmovies/NewMovies'
import Trending from './trending/Trending'
import BottomNavBar from '../navbars/BottomNavBar'

const api_url_new_movies = `https://api.themoviedb.org/3/movie/now_playing?api_key=6f6374633eb8fa4d6e17d7fe0c8abcf8&language=en-US&page=1`;
const api_url_popular_movies = `https://api.themoviedb.org/3/movie/popular?api_key=6f6374633eb8fa4d6e17d7fe0c8abcf8&language=en-US&page=1`;

const MovieHomePage = () => {

    let num = 0;
    let changeTrailer = null;

    const [newMovies, setnewMovies] = useState(null);
    const [popularMovies, setPopularMovies] = useState(null);
    const [TrailerNumber, setTrailerNumber] = useState(num);
    const [movieLength, setMovieLength] = useState(0);

    useEffect(() => {
        if(!changeTrailer){
            changeTrailer = setInterval(() => nextTrailer(), 35000, movieLength);
        }
        return() => {
            // console.log('you fool 2');
            clearInterval(changeTrailer);
        }
    }, [movieLength]);

    useEffect(() => {
        fetch(api_url_new_movies)
            .then((res) => res.json())
            .then( results => { 
                setnewMovies( results.results );
                setMovieLength(Object.keys(results.results).length);
                // console.log(results)
            }).catch(error => {
                console.log(error)
            })

        fetch(api_url_popular_movies)
            .then((res) => res.json())
            .then( results => { 
                setPopularMovies( results.results );
                //console.log(results)
            }).catch(error => {
                console.log(error)
            })
    }, [])

    function nextTrailer() {
        if(movieLength - 1 === num){
            // console.log('you fool');
            clearInterval(changeTrailer);
            changeTrailer = null;
            setTrailerNumber(0);
            num = 0;
            changeTrailer = setInterval(() => nextTrailer(), 35000);
        }else{
            setTrailerNumber(num += 1);
        }
        // console.log('running', num, TrailerNumber, movieLength)
    }

    return( 
        newMovies != null ?
        <div className='homepage'>
            <div className='t-nav'>
                <TopNavBar/>
            </div>
            <div className='h-new-trailer-s'>
                <div className='h-new-trailer-t'>Trailers</div>
                <div className='h-new-trailer'>
                    <NewTrailer newMovies={newMovies[TrailerNumber].id}/>
                </div>
            </div>
            <div className='h-new-movie-s'>
                <div className='h-new-movie-t'>New Movies</div>
                <div className='h-new-movie'>
                    <NewMovies newMovies={newMovies}/>
                </div>
            </div>
            <div className='h-trending-movie-s'>
                <div className='h-trending-movie-t'>Trending Movies</div>
                <div className='h-trending-movie'>
                    <Trending popularMovies={popularMovies}/>
                </div>
            </div>
            <div className='b-nav'>
                <BottomNavBar/>
            </div>
        </div>
        :
        <div>loading....</div>
    )
}

export default MovieHomePage;