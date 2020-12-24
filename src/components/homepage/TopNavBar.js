import React from 'react';
import { Link } from 'react-router-dom'

export default class TopNavBar extends React.Component {
    render(){
        return(
            <div>
                <nav>
                    <ul class="homenav">
                        <li id="nav-company-name"> Movies.com </li>
                        <li> New Movies </li>
                        <li> Catagories </li>
                        <li><Link to='/AboutApp'> About </Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}