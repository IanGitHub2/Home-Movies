import React from 'react';
import { Link } from 'react-router-dom'
import './topnavbar.css'

export default class TopNavBar extends React.Component {
    render(){
        return(
            <div>
                <nav>
                    <ul className="homenav">
                        <li id="nav-company-name"><Link to='/'> Movies.com </Link></li>
                        <li> New Movies </li>
                        <li> Catagories </li>
                        <li><Link to='/AboutApp'> About </Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}