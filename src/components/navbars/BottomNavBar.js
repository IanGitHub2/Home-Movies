import React from 'react';
import './bottomnavbar.css';
import { Link } from 'react-router-dom'

export default class TopNavBar extends React.Component {
    render(){
        return(
            <div>
                <nav>
                    <ul className="bottomnav">
                        <li id="nav-company-name"><Link to='/'> Movies.com </Link></li>
                        <li> None </li>
                        <li> None </li>
                        <li> None </li>
                    </ul>
                </nav>
            </div>
        )
    }
}