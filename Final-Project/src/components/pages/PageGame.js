import React, {useState, useEffect, useContext} from 'react';
import {GameContext} from '../Context/GameProvider';
import {IoPerson} from 'react-icons/io5';

const PageGame = (props) => {
    const [gameList, setGameList] = useContext(GameContext);
    const [game, setGame] = useState({});

    useEffect(() => {
        let currentGame = gameList.find((item) => item.id == props.id);
        setGame(currentGame);
        window.scrollTo(0,0);
    }, [])

    return (
        <div className="pageGame">
            <div className="game-top">
                <img src={game.image_url} />
                <div className="game-top-desc">
                    <h1>{game.name}</h1>
                    <p><b>Released : </b> {game.release}</p>
                    {game.singlePlayer && 
                        <p><IoPerson /><IoPerson style={{visibility: "hidden"}}/> Single Player</p>
                    }
                    {game.multiplayer && 
                        <p><IoPerson /><IoPerson /> Multiplayer</p>
                    }
                    <p><b>Genre : </b> {game.genre}</p>
                    <p><b>Platform : </b> {game.platform}</p>
                </div>
            </div>
        </div>
    )
}

export default PageGame;