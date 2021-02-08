import React from 'react';

export default class SingleDataPage extends React.Component {
    render() {
        if (!this.props.singlePostElement) return 1;
        return(
            <div>
                {this.props.singlePostElement.map((single, i ) => {
                    return(
                        <div>
                            <div key={single.id}>
                                <img src={`https://image.tmdb.org/t/p/w185${single.poster_path}`} alt="Movie cover art"/>
                                <div>{ single.title }</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}