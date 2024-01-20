import classes from './Error404.module.css'
import popeye from '../../assets/popeye.gif'

const Error404 = () => {
    return <div className={classes.content}>
        <h1>Double Check your Map, Captain.</h1>
        <img src={popeye} alt="" />
        <h2>404: Page not found!</h2>
    </div>
}

export default Error404;