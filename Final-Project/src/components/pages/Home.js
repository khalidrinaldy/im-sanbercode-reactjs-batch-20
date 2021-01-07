import React, { useContext, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import PageMovie from '../pages/PageMovie';
import {MovieContext} from '../Context/MovieProvider';
import {GameContext} from '../Context/GameProvider';
import Carousel from 'react-grid-carousel';

const Home = () => {
    const [movieList, setMovieList] = useContext(MovieContext);
    const [gameList, setGameList] = useContext(GameContext);
    const history = useHistory();

    return (
        <div className="home">
            <div className="section">
                <h1>Movie</h1>
                <h4>Action, adventure, romance, comedy, and many more you can find here !</h4>
                <div className="movie-section">
                    <h2>Movie List</h2>
                    <Carousel cols={4} rows={1} gap={10} className="grid-list" loop>
                        {movieList.map((item) => 
                            <Carousel.Item className="grid-item">
                                <Link to={"/movie/" + item.id}>
                                    <img src={item.image_url} className="grid-image" />
                                    <h3 className="grid-title">{item.title}</h3>
                                </Link>
                            </Carousel.Item>
                        )}
                    </Carousel>
                </div>
            </div>
            <div className="section">
                <h1>Game</h1>
                <h4>Gaming is not a choice. It is your will to conquer them all !</h4>
                <div className="game-section">
                    <h2>Game List</h2>
                    <Carousel cols={4} rows={1} gap={10} className="grid-list" loop>
                        {gameList.map((item) => 
                            <Carousel.Item className="grid-item" value={item.id}>
                                <Link to={"/game/" + item.id}>
                                    <img src={item.image_url} className="grid-image"/>
                                    <h3 className="grid-title">{item.name}</h3>
                                </Link>
                            </Carousel.Item>
                        )}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Home;