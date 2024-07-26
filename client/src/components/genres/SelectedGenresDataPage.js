import React from 'react'

export default class SelectedGenresDataPage extends React.Component {
    render() {
        return(
            <div>
                <div>Hi still working on this.</div>
                {this.props.selectedGenres.map((genres, i ) => {
                    return(
                        <div key={i}>
                            <div key={genres.id}>
                                <div>{genres.total_results}</div>
                                <div>{genres.results[9].title}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}