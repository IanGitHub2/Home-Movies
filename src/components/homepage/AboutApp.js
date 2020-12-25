import React from 'react';
import TopNavBar from './TopNavBar'
import BottomNavBar from './BottomNavBar'

export default class AboutApp extends React.Component {
    render(){
        return(
            <div>
                <TopNavBar/>
                <div>Block 1</div>
                <div>Block 2</div>
                <div>Block 3</div>
                <div>Block 4</div>
                <BottomNavBar/>
            </div>
        )
    }
}