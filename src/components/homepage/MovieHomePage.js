import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import './moviehomepage.css'
import TopNavBar from './TopNavBar'
import NewTrailer from './NewTrailer'
import NewMovies from './NewMovies'
import BottomNavBar from './BottomNavBar'

export default class MovieHomePage extends Component {
    render() {
        return (
            <div id="body-css">
                <TopNavBar/>
                <NewTrailer/>
                <NewMovies/>
                <BottomNavBar/>
            </div>
        )
    }
}