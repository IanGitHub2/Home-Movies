import React from 'react'
import axios from 'axios'
import SingleDataPage from './SingleDataPage'

const api_url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=6f6374633eb8fa4d6e17d7fe0c8abcf8`

export default class SinglePost extends React.Component {

    state = {
        single: []
    }

    componentDidMount() {
        axios.get(api_url).then(res => {
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