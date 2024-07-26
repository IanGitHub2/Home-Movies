import React from 'react';
import './aboutapp.css'
import TopNavBar from '../navbars/TopNavBar'
import BottomNavBar from '../navbars/BottomNavBar'

export default class AboutApp extends React.Component {
    render(){
        return(
            <div id="about-app-body">

                <TopNavBar className='about-t-nav'/>
                <div className='about-app-info'>

                    <div id="about-app-container">

                        <div id="about-header">
                            <div className="about-header-text">Information about this site</div>
                        </div>

                        <div id="tag-line">
                            <div className="tag-line-text">"This product uses the TMDb API but is not endorsed or certified by TMDb."</div>
                        </div>

                        <div id="movieDB">
                            <img className='moviedb-img' alt='The Movie DB Logo' src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg'/>
                        </div>

                        <a id="button-link" href='https://www.themoviedb.org/' target="_blank" rel="noopener noreferrer">
                            <div className='button-link-text'>Link to The Movie DB</div>
                        </a>

                        <a id="block2" href='https://my-portfolio-ik.netlify.app/' target="_blank" rel="noopener noreferrer">
                            <div id="block02" className="regualer-tag-a">Portfolio</div>
                        </a>

                        <a id="block4" href='https://www.linkedin.com/in/iankincaid/' target="_blank" rel="noopener noreferrer">
                            <div id="block04" className="regualer-tag-a">LinkedIn</div>
                        </a>

                        <a id="block5" href='https://github.com/IanGitHub2' target="_blank" rel="noopener noreferrer">
                            <div id="block05" className="regualer-tag-a">Github: IanGitHub2</div>
                        </a>

                    </div>

                </div>
                <BottomNavBar className='about-b-nav'/>
                
            </div>
        )
    }
}