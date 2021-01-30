import React from 'react'
// import axios from 'axios'
import SingleDataPage from './SingleDataPage'

var full_url = document.URL; // Get current url
var url_array = full_url.split('/') // Split the string into an array with / as separator
var last_segment = url_array[url_array.length-1];

const api_url = `https://api.themoviedb.org/3/movie/${last_segment}?api_key=6f6374633eb8fa4d6e17d7fe0c8abcf8`

export default class SinglePost extends React.Component {

    state = {
        singles: []
    }

    componentDidMount() {
        fetch(api_url)
        .then((res) => res.json())
        .then( data => { 
            this.setState({ singles: data.data });
            console.log(data)
        })
    }


    render() {
        return(
            <div>
                <SingleDataPage singles={this.state.singles}/>
            </div>
        )
    }
}