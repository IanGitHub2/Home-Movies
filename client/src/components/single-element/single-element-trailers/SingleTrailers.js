import React, { useState, useEffect } from 'react';
import './singletrailer.css';

function SingleTrailers({singlePostElementTrailer}) {
    const [alltrailer, setAllTrailer] = useState(null);
    const [youtubelookupkey, setYoutubeLookUpKey] = useState(null);
    const [youtubelookupname, setYoutubeLookUpName] = useState(null);
    const [youtubetype, setYoutubeType] = useState(null);
    const [currenttrailer, setCurrentTrailer] = useState(null);
    const [totaltrailersnum, setTotalTrailersNum] = useState(null)

    const api_url_new_movies_trailer_part1 = `https://api.themoviedb.org/3/movie/`;
    const api_url_new_movies_trailer_part2 = `/videos?api_key=6f6374633eb8fa4d6e17d7fe0c8abcf8&language=en-US&page=1`;

    useEffect(() => {
        fetch(api_url_new_movies_trailer_part1 + singlePostElementTrailer[0] + api_url_new_movies_trailer_part2)
        .then((res) => res.json())
        .then( results => {
            setAllTrailer(results.results);
            setTotalTrailersNum(Object.keys(results.results).length)
            setCurrentTrailer(totaltrailersnum);
            // console.log(results.results)
        }).catch(error => {
            console.log(error)
        })
    }, [singlePostElementTrailer, totaltrailersnum])

    useEffect(() => {
        setYoutubeLookUpKey(alltrailer?.[currenttrailer - 1]?.key);
        setYoutubeLookUpName(alltrailer?.[currenttrailer - 1]?.name);
        setYoutubeType(alltrailer?.[currenttrailer - 1]?.type)
    }, [alltrailer, currenttrailer, totaltrailersnum])

    function perviousTrailer () {
        if(currenttrailer <= totaltrailersnum - 1 || !currenttrailer) {
            setCurrentTrailer((i) => (i + 1));
        }
    }

    function nextTrailer () {
        if(currenttrailer - 1 >= 1 || !currenttrailer) {
            setCurrentTrailer((i) => (i - 1));
        }
    }

    return (
        !currenttrailer 
            ?
            <div>Loading....maybe</div>
            :
        <div className='single-trailer-container'>
            <button className={totaltrailersnum <= 1 ? 's-t-pervious-hide' : 's-t-pervious'} onClick={perviousTrailer}>{`<`}</button>
            <div className='s-t-container'>
                <iframe className='single-trailer' src={`https://www.youtube.com/embed/${youtubelookupkey}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen title={`${youtubelookupname}`}></iframe>
            </div>
            <div className='s-t-t-container'>
                <div className='single-trailer-numbers'>{totaltrailersnum - currenttrailer + 1} / {totaltrailersnum }</div>
                <div className='single-trailer-name'>{youtubelookupname} / {youtubetype}</div>
            </div>
            <button className={totaltrailersnum <= 1 ? 's-t-next-hide' : 's-t-next'} onClick={nextTrailer}>{`>`}</button>
        </div>
    )
}

export default SingleTrailers;