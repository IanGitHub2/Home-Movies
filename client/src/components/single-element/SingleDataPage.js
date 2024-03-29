import React from 'react';
import './singlepost.css'

export default class SingleDataPage extends React.Component {
    render() {
        //if (!this.props.singlePostElement) return 1;
        return(
            <div id='pagebody'>
                {this.props.singlePostElement.map((single, i ) => {
                    return(
                        <div id="single-container" key={single.id}>
                            <div id="single-tagline" className="single-tag">
                                <img src={`https://image.tmdb.org/t/p/w185${single.backdrop_path}`} alt="Movie cover art" id="backdrop-tag"/>
                                <p id="sin-tag-self" className="bold-tag"> {single.tagline} </p>
                            </div>

                            <div id="single-img">
                                <img src={`https://image.tmdb.org/t/p/w185${single.poster_path}`} alt="Movie cover art" id="img-tag"/>
                            </div>

                            <div id="single-overview">
                                <p className="regualer-tag">Overview: {single.overview}</p>
                            </div>

                            <div id="single-title">
                                <div id="title-sin" className="bold-tag">{ single.title }</div>
                            </div>
                            
                            <div id="single-release" className="line-up">
                                <p className="bold-tag">Release date:</p> 
                                <p className="regualer-tag">{single.release_date}</p>
                            </div>

                            <div id="single-status" className="line-up">
                                <p className="bold-tag">Movie Status:</p> 
                                <p className="regualer-tag">{single.status}</p>
                            </div>

                            <div id="single-length" className="line-up">
                                <p className="bold-tag">Length:</p> 
                                <p className="regualer-tag">{single.runtime}</p>
                            </div>

                            <div id="single-genres">
                                <p className="bold-tag">Did you like or dislike the movie ?</p>
                                <div>
                                    <button> Like </button>
                                    <div>0</div>
                                </div>
                                <div>
                                    <button> DisLike </button>
                                    <div>0</div>
                                </div>
                            </div>

                            <div id="single-money">
                                <div className="sin-budget">
                                    <p id="sin-budget1" className="bold-tag">Budget:$</p><p className="regualer-tag">{single.budget}</p>
                                </div>
                                <div className="sin-rev">
                                    <p id="sin-rev1" className="bold-tag">Revenue:$</p><p className="regualer-tag">{single.revenue}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}