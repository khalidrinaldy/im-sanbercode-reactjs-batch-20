import React, {useState, useEffect, createContext} from 'react';
import axios from 'axios';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        axios.get(`https://backendexample.sanbersy.com/api/data-movie`)
            .then(res => setMovieList(res.data))
    }, [])
    return (
        <MovieContext.Provider value={[movieList, setMovieList]}>
            {props.children}
        </MovieContext.Provider>
    )
}