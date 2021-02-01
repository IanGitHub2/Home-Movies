import React from 'react';

export default class SingleDataPage extends React.Component {
    render() {
        // if (!this.props.singles) return null;
        // console.log(this.state)
        return(
            <div>
                {/* {this.props.singles.map((single, i ) => {
                    return(
                        <div>
                            <div key={single.id}>
                                <img src={`https://image.tmdb.org/t/p/w185${single.poster_path}`} alt="Movie cover art"/>
                                <div>{ single.name }</div>
                            </div>
                        </div>
                    )
                })} */}
            </div>
        )
    }
}