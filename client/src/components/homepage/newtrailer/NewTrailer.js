import React, { useState, useEffect } from 'react';
import './newtrailer.css'

const NewTrailer = ({newMovies}) => {

    const [youtubelookupkey, setYoutubeLookUpKey] = useState(null);
    const [youtubelookupname, setYoutubeLookUpName] = useState(null);

    const api_url_new_movies_trailer_part1 = `https://api.themoviedb.org/3/movie/`;
    const api_url_new_movies_trailer_part2 = `/videos?api_key=6f6374633eb8fa4d6e17d7fe0c8abcf8&language=en-US&page=1`;

    useEffect(() => {
        fetch(api_url_new_movies_trailer_part1 + newMovies + api_url_new_movies_trailer_part2)
        .then((res) => res.json())
        .then( results => { 
            setYoutubeLookUpKey(results.results[0].key);
            setYoutubeLookUpName(results.results[0].name);
            // console.log(results)
        }).catch(error => {
            console.log(error)
        })
    }, [newMovies])

    return( youtubelookupname != null ?
            <div className='hometrailer-container'>
                <div className='hometrailer-section'>
                    <iframe className="hometrailer" src={`https://www.youtube.com/embed/${youtubelookupkey}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen title={`${youtubelookupname}`}></iframe>
                    <div className='t-t-name'>{youtubelookupname}</div>
                </div>
            </div>
            :
            <div>loading....</div>
        )
}

export default NewTrailer;