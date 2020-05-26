import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './moviehomepage.css'

export default class MovieHomePage extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul class="homenav">
                        <li><a herf="#"> Profile </a></li>
                        <li><a herf="#"> New Movies </a></li>
                        <li><a herf="#"> Catagories </a></li>
                        <li><a herf="#"> Setting </a></li>
                    </ul>
                </nav>
                <trailer>
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8t1NO-N4rFKnmw-8AdUJdwrWuJJIwOGEzoQJc0rLY7oP8oPtG&usqp=CAU" class="hometrailer" alt="Movie Trailer"></img>
                    </div>
                </trailer>
                <selection>
                    {/* swicth to links */}
                    <div class="homeselection">
                        <div>New Movies</div>
                    </div>
                    <div class="homeselection">
                        <div>Action</div>
                    </div>
                    <div class="homeselection">
                        <div>Comedy</div>
                    </div>
                    <div class="homeselection">
                        <div>Science Fiction</div>
                    </div>
                </selection>
            </div>
        )
    }
}