import React, {useState, useEffect, useContext} from 'react';
import {MovieContext} from '../Context/MovieProvider';
import {Link} from 'react-router-dom';

const Movie = () => {
    const [movieList, setMovieList] = useContext(MovieContext);

    useEffect(() => {
        window.scrollTo(0,0);
    },[]);
    
    return (
        <div className="movie">
            {movieList.map((item) => 
                <Link to={"/movie/" + item.id}>
                    <figure>
                        <img src={item.image_url} />
                        <figcaption style={{textAlign: "center"}}><b>{item.title}</b></figcaption>
                        <figcaption className="caption"><b>Aired : </b>{item.year}</figcaption>
                        <figcaption className="caption"><b>Rating : </b>{item.rating}/10</figcaption>
                        <figcaption className="caption"><b>Duration : </b>{item.duration}</figcaption>
                        <figcaption className="caption"><b>Genre : </b>{item.genre}</figcaption>
                    </figure>
                </Link>
            )}
        </div>
    )
}

export default Movie;