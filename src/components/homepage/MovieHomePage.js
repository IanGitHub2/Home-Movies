import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './moviehomepage.css'

export default class MovieHomePage extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>Home</li>
                    <li>New Movies</li>
                    <li>Catagories</li>
                    <li>Settings</li>
                </ul>
                <div>
                    <div>
                        <img></img>
                    </div>
                </div>
            </div>
        )
    }
}