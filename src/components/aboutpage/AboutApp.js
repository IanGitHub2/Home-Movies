import React from 'react';
import TopNavBar from '../navbars/TopNavBar'
import BottomNavBar from '../navbars/BottomNavBar'

export default class AboutApp extends React.Component {
    render(){
        return(
            <div>
                <TopNavBar/>
                <div>
                    <div>About this app.</div>
                </div>
                <div>
                    <img alt='The Movie DB Logo' src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg'/>
                    <div>"This product uses the TMDb API but is not endorsed or certified by TMDb."</div>
                    <div><a href='https://www.themoviedb.org/'>Link to The Movie DB</a></div>
                </div>
                <div>Block 3</div>
                <div>Block 4</div>
                <BottomNavBar/>
            </div>
        )
    }
}