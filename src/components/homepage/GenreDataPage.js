import React from 'react'

export default class GenreDataPage extends React.Component {
    render(){
        return(
            <div>
                {this.props.genres.map(( genre, i) => {
                    return(
                        <div>
                            <div key={genre.id}>{genre.name}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}