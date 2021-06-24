import React from 'react';
import './aboutapp.css'
import TopNavBar from '../navbars/TopNavBar'
import BottomNavBar from '../navbars/BottomNavBar'

export default class AboutApp extends React.Component {
    render(){
        return(
            <div >

                <TopNavBar/>
                <div id="about-app-body">

                    <div id="about-app-container">

                        <div id="header">
                            <div className="bold-tag-a">Information about this site:</div>
                        </div>

                        <div id="tag-line">
                            <div className="regualer-tag-a">"This product uses the TMDb API but is not endorsed or certified by TMDb."</div>
                        </div>

                        <div id="movieDB">
                            <img alt='The Movie DB Logo' src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg'/>
                        </div>

                        <a id="button-link" href='https://www.themoviedb.org/' target="_blank" rel="noopener noreferrer">
                            <div className="regualer-tag-it-a">Link to The Movie DB</div>
                        </a>

                        <div id="block1">
                            <div id="block01" className="regualer-tag-a">Block1, Email</div>
                        </div>

                        <div id="block2">
                            <div id="block02" className="regualer-tag-a">Block 2, My Website</div>
                        </div>

                        <div id="block3">
                            <div id="block03" className="regualer-tag-a">Block 3, Resume</div>
                        </div>

                        <div id="block4">
                            <div id="block04" className="regualer-tag-a">Block 4, LinkedIn</div>
                        </div>

                        <div id="block5">
                            <div id="block05" className="regualer-tag-a">Block 5, Github</div>
                        </div>

                    </div>

                </div>
                <BottomNavBar/>
                
            </div>
        )
    }
}