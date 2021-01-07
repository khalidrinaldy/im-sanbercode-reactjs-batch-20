import React, {useState, useEffect, useContext} from 'react';
import {MovieContext} from '../Context/MovieProvider';
import { Rate } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const PageMovie = (props) => {
    const [movieList, setMovieList] = useContext(MovieContext);
    const [movie, setMovie] = useState({});
    const rating = movie.rating/2;
    const hour = Math.floor(movie.duration/60);
    const minute = movie.duration%60;

    useEffect(() => {
        let currentMovie = movieList.find((item) => item.id == props.id);
        setMovie(currentMovie);
        window.scrollTo(0,0);
    }, [])

    return (
        <div className="pageMovie">
            <div className="movie-top">
                <img src={movie.image_url} />
                <div className="movie-top-desc">
                    <h1>{movie.title}</h1>
                    <p>Aired {movie.year}</p>
                    <p><Rate disabled allowHalf value={rating}/> {movie.rating}</p>
                    <p><b>Genre : </b> {movie.genre}</p>
                    <p><ClockCircleOutlined /> {movie.duration} minutes / {hour} Hours {minute} Minutes</p>
                </div>
            </div>
            <div className="movie-bottom">
                <h2>Description</h2>
                <p>{movie.description}</p>
                <br/>
                <h2>Reviews</h2>
                <p>``{movie.review}``</p>
            </div>
        </div>
    )
}

export default PageMovie;