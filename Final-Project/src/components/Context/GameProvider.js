import React, {useState, useEffect, createContext} from 'react';
import axios from 'axios';

export const GameContext = createContext();

export const GameProvider = (props) => {
    const [gameList, setGameList] = useState([]);

    useEffect(() => {
        axios.get(`https://backendexample.sanbersy.com/api/data-game`)
            .then(res => setGameList(res.data))
    }, [])
    return (
        <GameContext.Provider value={[gameList, setGameList]}>
            {props.children}
        </GameContext.Provider>
    )
}