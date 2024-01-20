import React from "react";

import { useParams } from "react-router-dom";

import classes from "./GameDetail.module.css";
import BuyButton from "../../components/UI/BuyButton";
import JSONGames from "../../data/games.json";
import BackButton from "../../components/UI/BackButton";
import Error404 from "../Error404/Error404";

const GameDetail = () => {

    const params = useParams();

    const gameDetails = JSONGames["games"].filter((item) => item.id === params.id);

    if (gameDetails.length === 0){
        return <Error404/>
    }

    return (
        <main className={classes["detail-page"]}>
            <div className={classes["image-card"]}>

                <div className={classes['back-button']}>
                    <BackButton />
                </div>

                <picture>
                    <source srcSet={gameDetails[0].image} />

                    <img src={gameDetails[0].image} style={{ viewTransitionName: `game-${gameDetails[0].id}` }} alt={gameDetails[0].title} />
                </picture>
            </div>

            <aside className={classes["game-info"]}>
                <div className={classes["game-info__header"]}>
                    <h1>{gameDetails[0].title}</h1>
                    <p>{gameDetails[0].description}</p>
                </div>

                <div className={classes["game-info__content"]}>
                    <div>
                        <p>
                            <strong>Platforms: </strong>
                            {gameDetails[0].platform}
                        </p>
                    </div>

                    <div>
                        <p>
                            <strong>Genre: </strong>
                            {gameDetails[0].genre}
                        </p>
                    </div>

                    <div>
                        <p>
                            <strong>Published By: </strong>
                            {gameDetails[0].publishedBy}
                        </p>
                    </div>

                    <div>
                        <p>
                            <strong>Approximate Size: </strong>
                            {gameDetails[0].approximateSize}
                        </p>
                    </div>

                    <div>
                        <p>
                            <strong>Release Date: </strong>
                            {gameDetails[0].releaseDate}
                        </p>
                    </div>

                    
                </div>
                
                <div className={classes['buy-button']}>                
                    <BuyButton buyUrl={gameDetails[0].buyURL}/>
                </div>

            </aside>
        </main>
    );
};

export default GameDetail;