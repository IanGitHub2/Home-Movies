import React from 'react'
 import axios from 'axios'
import SingleDataPage from './SingleDataPage'
import TopNavBar from '../navbars/TopNavBar'
import BottomNavBar from '../navbars/BottomNavBar'

const api_config_url = `https://api.themoviedb.org/3/movie/`
const api_config_url2 = `?api_key=6f6374633eb8fa4d6e17d7fe0c8abcf8&language=en-US&page=1`

export default class SinglePost extends React.Component {

    // state = {
    //     singlePostElement: []
    // }

    constructor(data) {
        super(data);
    
        // Assign state itself, and a default value for items
        this.state = {
            singlePostElement: [{}]
        };
      }

    componentDidMount() {
        axios(api_config_url + this.props.match.params.id + api_config_url2)
        .then(({ data }) => {
            let result = data;
            this.setState({ singlePostElement: result.result })
            // this.setState({ singlePostElement: [data.data] })
            console.log(result)
        }).catch(error => {
            console.log(error)
        })
    }

    render() {console.log(this.singlePostElement)
        return(
            <div>
                <TopNavBar/>
                {/* <SingleDataPage singlePostElement={this.state.singlePostElement}/> */}
                <BottomNavBar/>
            </div>
        )
    }
}