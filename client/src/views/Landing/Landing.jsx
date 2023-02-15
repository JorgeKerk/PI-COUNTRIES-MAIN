import styles from './Landing.module.css'
import { Link } from 'react-router-dom'

const LandingPage = ()=> {
    return(
        <div className= { styles.mainContainer }>
            <Link to= '/home' >
                <button className= { styles.button} >Home Page</button>
            </Link>
        </div>
    )
}

export default LandingPage