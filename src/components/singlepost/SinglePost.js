import React from 'react'
import axios from 'axios'
import SingleDataPage from './SingleDataPage'

export default class SinglePost extends React.Component {

    state = {
        single: []
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=6f6374633eb8fa4d6e17d7fe0c8abcf8&language=en-US
        `).then(res => {
            this.setState({ single: res.data })
        })
    }


    render() {
        return(
            <div>
                <SingleDataPage singles={this.state.single}/>
            </div>
        )
    }
}