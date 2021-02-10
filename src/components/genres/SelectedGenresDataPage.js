import React from 'react'

export default class SelectedGenresDataPage extends React.Component {
    render() {
        return(
            <div>{this.props.selectedGenres.map((genres, i ) => {
                return(
                    <div>
                        <div>hi</div>
                    </div>
                    )
                })}
            </div>
        )
    }
}