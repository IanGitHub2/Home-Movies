import React from 'react';

export default class SingleDataPage extends React.Component {
    render() {
        return(
            <div>
                {this.props.singles.map((single, i ) => {
                    return(
                        <div>
                            <div key={single.id}>
                                <img src={`https://image.tmdb.org/t/p/w185${single.poster_path}`} alt="Movie cover art"/>
                                <div>{ single.title}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}