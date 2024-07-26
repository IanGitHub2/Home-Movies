import React from 'react'
import axios from 'axios'
import SelectedGenresDataPage from './SelectedGenresDataPage'
import TopNavBar from '../navbars/TopNavBar'
import BottomNavBar from '../navbars/BottomNavBar'

const api_config_url = `https://api.themoviedb.org/3/movie/`
const api_config_url2 = `/similar?api_key=6f6374633eb8fa4d6e17d7fe0c8abcf8&language=en-US&page=1`

export default class SelectedGenres extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            selectedGenres: []
        };
    }

    componentDidMount() {
        axios(api_config_url + this.props.match.params.id + api_config_url2)
        .then(({ data }) => {
            this.setState({ selectedGenres: [data] })
            // console.log(data)
        }).catch(error => {
            console.log(error)
        })
    }


    render() {
        return(
            <div>
                <TopNavBar/>
                <SelectedGenresDataPage selectedGenres={this.state.selectedGenres}/>
                <BottomNavBar/>
            </div>
        )
    }
}