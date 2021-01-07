import React, {useState, useEffect, useContext} from 'react';
import {GameContext} from '../Context/GameProvider';
import {Link} from 'react-router-dom';

const Game = () => {
    const [gameList, setGameList] = useContext(GameContext);

    useEffect(() => {
        window.scrollTo(0,0);
    },[]);
    
    return (
        <div className="game">
            {gameList.map((item) => 
                <Link to={"/game/" + item.id}>
                    <figure>
                        <img src={item.image_url} />
                        <figcaption style={{textAlign: "center"}}><b>{item.name}</b></figcaption>
                        <figcaption className="caption"><b>Released : </b>{item.release}</figcaption>
                        <figcaption className="caption"><b>Category : </b>
                            {item.singlePlayer && 
                                "Single Player"
                            }
                            {item.multiplayer == 1 ? 
                                ", Multiplayer" : null
                            }
                        </figcaption>
                        <figcaption className="caption"><b>Genre : </b>{item.genre}</figcaption>
                        <figcaption className="caption"><b>Platform : </b>{item.platform}</figcaption>
                    </figure>
                </Link>
            )}
        </div>
    )
}

export default Game;