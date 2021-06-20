import React from 'react';
import './bottomnavbar.css';
import { Link } from 'react-router-dom'

export default class TopNavBar extends React.Component {
    render(){
        return(
            <div>
                <nav>
                    <ul className="bottomnav">
                        <Link to='/'><li id="nav-company-name"> Movies.com </li></Link>
                        <li> None </li>
                        <li> None </li>
                        <li> None </li>
                    </ul>
                </nav>
            </div>
        )
    }
}