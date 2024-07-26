import React from "react";
import SingleTrailers from "./single-element-trailers/SingleTrailers";
import "./singlepost.css";

const SingleDataPage = ({ singlePostElement, singlePostElementTrailer }) => {

    let getmovieruntime = singlePostElement.map((sin, i) => { return (sin.runtime)});

    let calchours = getmovieruntime / 60;
    let TotalRunTimeHours = Math.abs(calchours.toString().slice(0, 1))
    let lookfor = '.'
    let getruntimeminutes = Math.abs(calchours.toString().slice(calchours.toString().indexOf(lookfor)))
    let TotalRunTimeMinutes = Math.round(getruntimeminutes * 60)

    let minutefix = null;
    let fixminlook = null;

    if(TotalRunTimeMinutes <= 9){
        let zero = '0';
        minutefix = TotalRunTimeMinutes.toString();
        fixminlook = zero.concat('', minutefix);
    }

    return (
        <div id="pagebody">
        {singlePostElement?.map((single, i) => {
            return (
            <div id="single-container" key={single.id}>
                <div className="single-trailer-container">
                    <SingleTrailers
                        singlePostElementTrailer={singlePostElementTrailer}
                    />
                </div>

                <div id="single-tagline" >
                    <p id={!single.tagline ? 'sin-tag-inv-hide' : "sin-tag-inv"} >
                        {single.tagline}
                    </p>
                </div>

                <div id="single-img">
                    <img
                        src={`https://image.tmdb.org/t/p/w185${single.poster_path}`}
                        alt="Movie cover art"
                        id="img-tag"
                    />
                </div>

                <div id="single-overview">
                    <div className="single-overview-text">
                        <div className="single-overview-t-text">Description</div>
                        {single.overview}
                    </div>
                </div>

                <div className="single-vot">
                    <img
                        src={`https://image.tmdb.org/t/p/w185${single.backdrop_path}`}
                        alt={`${single.title} Backdrop`}
                        id="backdrop-tag"
                    />
                    <div>{single.vote_average} / 10</div>
                    <div>{single.vote_count} Votes</div>
                </div>

                <div id="single-title">
                    <div id="title-sin">
                        {single.title}
                    </div>
                </div>

                <div id="single-release">
                    <p className="single-release-title">Release date:</p>
                    <p className="single-release-date">{single.release_date}</p>
                </div>

                <div id="single-status">
                    <p className="single-status-title">Movie Status:</p>
                    <p className="single-status-name">{single.status}</p>
                </div>

                <div id="single-length">
                    <p className="single-length-title">Length:</p>
                    <p className="single-length-time">{TotalRunTimeHours}:{!fixminlook ? TotalRunTimeMinutes : fixminlook}</p>
                </div>

                <div className="single-prod-comp">
                    {single?.production_companies?.map((sin, i) => {
                    return (
                        <div key={i} className="single-prod-comp-inv">
                            <div className="single-prod-comp-img-container">
                                {!sin.logo_path ?
                                    <div className="single-prod-comp-img-hide"></div>
                                    :
                                    <img
                                        className="single-prod-comp-img"
                                        src={`https://image.tmdb.org/t/p/w185${sin.logo_path}`}
                                        alt={sin.name}
                                        // id={sin.id}
                                    />
                                }
                            </div>
                            <div className="single-prod-comp-name">{sin.name}</div>
                        </div>
                    );
                    })}
                </div>

                <div className="single-prod-coun">
                    {single?.production_countries?.map((sin, i) => {
                        return(
                            <div key={i} className={Object.keys(single.production_countries).length > 1 ? "single-prod-coun-inv-more" : "single-prod-coun-inv"}>
                                <div className={Object.keys(single.production_countries).length > 1 ? "single-prod-coun-name-more" : "single-prod-coun-name"}>
                                    {sin.name}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div id="single-genres">
                    {single?.genres?.map((sin, i) => {
                        return (
                            <div key={i} className="single-gens">
                                <div className='single-gens-names'>{sin.name}</div>
                            </div>
                        );
                    })}
                </div>

                <div id="single-money">
                    <div className="sin-budget">
                        <div id="sin-budget-title">
                        Budget:
                        </div>
                        <div className={single.budget > single.revenue ? 'sin-budget-data-red' : 'sin-budget-data-black'}>${single.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                    </div>
                    <div className="sin-rev">
                        <div id="sin-rev-title">
                        Revenue:
                        </div>
                        <div className={single.revenue > single.budget ? 'sin-rev-data-green' : single.revenue < single.budget ? 'sin-rev-data-red' :  single.revenue === single.budget ? 'sin-rev-data-black' : 'sin-rev-data-black'}>${single.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                    </div>
                </div>
            </div>
            );
        })}
        </div>
    );
};

export default SingleDataPage;
