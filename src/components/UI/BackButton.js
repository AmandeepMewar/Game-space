import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import classes from './BackButton.module.css'

const BackButton = () => {
    const navigate = useNavigate();
    return (
        <Link onClick={()=> navigate(-1)}  className={classes.button} ><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></Link>
    );
}

export default BackButton;