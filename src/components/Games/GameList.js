import React from 'react'

import classes from './GameList.module.css'
import JSONGames from '../../data/games.json'
import GameItem from './GameItem';
import Card from '../Card/Card';

const GameList = () => {
    return (
        <Card className={classes['game-list']}>
            {JSONGames['games'].map(item => <GameItem key={item.id} title={item.title} image={item.image} id={item.id}/>)}
        </Card>
    )
}

export default GameList;