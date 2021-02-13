import React from 'react';
import { Link } from 'react-router-dom'
import './topnavbar.css'

export default class TopNavBar extends React.Component {
    render(){
        return(
            <div>
                <nav>
                    <ul className="top-nav">
                        <Link to='/'><li id="nav-company-name"> Movies.com</li> </Link>
                        <li> New Movies </li>
                        <Link to='/Genres'><li> Genres </li></Link>
                        <Link to='/AboutApp'><li> About </li></Link>
                    </ul>
                </nav>
            </div>
        )
    }
}