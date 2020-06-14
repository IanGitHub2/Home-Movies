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
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-HAAkHEIgn_4WMY0BVr5hgCfmnLiEJ2Fyy6RNjDwQdr2wJ7sgqjQIRKmJ0Pw&s=10" class="hometrailer" alt="Movie Trailer"></img>
                    </div>
                </trailer>
                <selection>
                  <div class="new-movie-genre-title">New Movies</div>
                    <div class="new-release-container">
                        <div class="new-release-movie-poster-box">
                          <img class="new-release-movie" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfj0tBZXAuZrFyLTNqyU7pggW8SYJzZRQ8doLkuUfImOGj5r_T&usqp=CAU" alt="Movie Picture"/>
                          <div class="new-release-title">The SpongeBob Movie: Sponge on the Run</div>
                        </div>
                        <div class="new-release-movie-poster-box">
                          <img class="new-release-movie" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThSVYeNP82fbTjIjp7hAn7hBUGSvTBcv8ZiqYBXieoeVT-X8ymJzI8Xhyv7ljb&s=10"alt="Movie Picture"/>
                          <div class="new-release-title">Shaft</div>
                        </div>
                        <div class="new-release-movie-poster-box">
                          <img class="new-release-movie" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj5GJ8AvnagwtcJKPxTKWIYcoGvrkcVmuyqSiiAY5Wdud3_MStQR0d0jyK3p36&s=10" alt="Movie Picture"/>
                          <div class="new-release-title">Bad Boys: For Life</div>
                        </div>
                        <div class="new-release-movie-poster-box">
                          <img class="new-release-movie" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGYI6djJelhvVbff-zFhx52-TmCemCrvLCvCWwPXsuFOR2AlnB7fPFM57YDHT&s=10" alt="Movie Picture"/>
                          <div class="new-release-title">Play Date with Destiny</div>
                        </div>
                        <div class="new-release-movie-poster-box">
                          <img class="new-release-movie" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOYaKYnbUfEKq2fCIjZe6dEOF9udGhvNztya3gQHzisAyOYvD9t2wS0U5GyOY2&s=10" alt="Movie Picture"/>
                          <div class="new-release-title">Ad Astra</div>
                        </div>
                        <div class="new-release-movie-poster-box">
                          <img class="new-release-movie" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAMf_lyMtnLaErYj43C4V63DjRKuQYMt3vvNcCMPVpiUu_18CS7FeYv9qOxIww&s=10" alt="Movie Picture"/>
                          <div class="new-release-title">Zombieland Double Tap</div>
                        </div>
                        <div class="new-release-movie-poster-box">
                          <img class="new-release-movie" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhbNnbABmkREHdRYlBuvqREnz8YZjiEkV616tz9k-kAE-ZA4BBDzVLfWSQNx0E&s=10" alt="Movie Picture"/>
                          <div class="new-release-title">Terminator Dark Fate</div>
                        </div>
                        <div class="new-release-movie-poster-box">
                          <img class="new-release-movie" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLjBBzEmoGv5qag-vpHIPKeWX929v473aVNpFCGpGVFVlDtDIZUbWAFKAO3E05&s=10" alt="Movie Picture"/>
                          <div class="new-release-title">Lady and The Tramp</div>
                        </div>
                    </div>
                  <div class="top-trending-title">Top Trending</div>
                    <div class="top-trending-container">
                      <div class="top-trending-box">
                        <img class="top-trending-movie" src="" alt="Movie Picture"/>
                        <div class="top-trending-movie-title">Bye</div>
                      </div>
                      <div class="top-trending-box">
                        <img class="top-trending-movie" src="" alt="Movie Picture"/>
                        <div class="top-trending-movie-title">Bye</div>
                      </div>
                      <div class="top-trending-box">
                        <img class="top-trending-movie" src="" alt="Movie Picture"/>
                        <div class="top-trending-movie-title">Bye</div>
                      </div>
                      <div class="top-trending-box">
                        <img class="top-trending-movie" src="" alt="Movie Picture"/>
                        <div class="top-trending-movie-title">Bye</div>
                      </div>
                      <div class="top-trending-box">
                        <img class="top-trending-movie" src="" alt="Movie Picture"/>
                        <div class="top-trending-movie-title">Bye</div>
                      </div>
                      <div class="top-trending-box">
                        <img class="top-trending-movie" src="" alt="Movie Picture"/>
                        <div class="top-trending-movie-title">Bye</div>
                      </div>
                    </div>
                </selection>
            </div>
        )
    }
}