import React from 'react'
import axios from 'axios'
import './singlepost.css'
import SingleDataPage from './SingleDataPage'
import TopNavBar from '../navbars/TopNavBar'
import BottomNavBar from '../navbars/BottomNavBar'

const api_config_url = `https://api.themoviedb.org/3/movie/`
const api_config_url2 = `?api_key=6f6374633eb8fa4d6e17d7fe0c8abcf8&language=en-US&page=1`

export default class SinglePost extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            singlePostElement: [],
            singlePostElementTrailer: []
        };
    }

    componentDidMount() {
        axios(api_config_url + this.props.match.params.id + api_config_url2)
        .then(({ data }) => {
            this.setState({ singlePostElement: [data] })
            this.setState({singlePostElementTrailer: [data.id]})
            //console.log(data)
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        return(
            <div id='single-post-body'>
                <TopNavBar/>
                <SingleDataPage singlePostElement={this.state.singlePostElement} singlePostElementTrailer={this.state.singlePostElementTrailer}/>
                <BottomNavBar/>
            </div>
        )
    }
}