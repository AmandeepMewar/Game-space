import React from 'react'

import classes from './GameItem.module.css'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { flushSync } from 'react-dom';

const GameItem = (props) => {

    const navigate = useNavigate();

    const to = `/${props.id}`

    return (
        <div className={classes['image-card']}>
            <Link onClick={() => {
                document.startViewTransition(() => {
                    flushSync(() => {
                        navigate(to)
                    })
                })
            }}>
                <img src={props.image} alt={props.title} style={{ viewTransitionName: `game-${props.id}` }} className={classes['game-img']} loading='lazy' />
            </Link>
        </div>
    )
}

export default GameItem;