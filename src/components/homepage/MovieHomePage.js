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
                    <div class="new-release-homepage">
                        <div class="new-release-movie-poster-box">
                          <div class="new-release-movie">movie and image</div>
                          <div class="new-release-title">title</div>
                        </div>
                        <div class="new-release-movie-poster-box">
                          <div class="new-release-movie">movie and image</div>
                          <div class="new-release-title">title</div>
                        </div>
                        <div class="new-release-movie-poster-box">
                          <div class="new-release-movie">movie and image</div>
                          <div class="new-release-title">title</div>
                        </div>
                        <div class="new-release-movie-poster-box">
                          <div class="new-release-movie">movie and image</div>
                          <div class="new-release-title">title</div>
                        </div>
                        <div class="new-release-movie-poster-box">
                          <div class="new-release-movie">movie and image</div>
                          <div class="new-release-title">title</div>
                        </div>
                        <div class="new-release-movie-poster-box">
                          <div class="new-release-movie">movie and image</div>
                          <div class="new-release-title">title</div>
                        </div>
                        <div class="new-release-movie-poster-box">
                          <div class="new-release-movie">movie and image</div>
                          <div class="new-release-title">title</div>
                        </div>
                        <div class="new-release-movie-poster-box">
                          <div class="new-release-movie">movie and image</div>
                          <div class="new-release-title">title</div>
                        </div>
                    </div>

                    <div>
                    </div>
                </selection>
            </div>
        )
    }
}