import React from 'react';
import './singlepost.css'

export default class SingleDataPage extends React.Component {
    render() {
        //if (!this.props.singlePostElement) return 1;
        return(
            <div id='pagebody'>
                {this.props.singlePostElement.map((single, i ) => {
                    return(
                        <div key={single.id}>
                            <div >
                                <div className="line-up">
                                    <p className="bold-tag"> Tagline: </p> 
                                    <p className="regualer-tag"> {single.tagline} </p>
                                </div>

                                <img src={`https://image.tmdb.org/t/p/w185${single.poster_path}`} alt="Movie cover art" id="img-tag"/>

                                <div className="bold-tag">{ single.title }</div>
                            </div>
                            <div>
                                <div className="line-up">
                                    <p className="bold-tag">Realease date:</p> 
                                    <p className="regualer-tag">{single.release_date}</p>
                                </div>

                                <div className="line-up">
                                    <p className="bold-tag">Movie Status:</p> 
                                    <p className="regualer-tag">{single.status}</p>
                                </div>

                                <div className="line-up">
                                    <p className="bold-tag">Length:</p> 
                                    <p className="regualer-tag">{single.runtime}</p>
                                </div>

                                <div>Genres: </div>
                            </div>
                            <div>
                                <div>Budget: ${single.budget}</div>
                                <div>Revenue: ${single.revenue}</div>
                            </div>
                            <div>
                                <p className="regualer-tag">Overview: {single.overview}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}