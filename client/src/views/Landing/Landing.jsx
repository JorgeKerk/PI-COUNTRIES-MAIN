import styles from './Landing.module.css'
import { NavLink } from 'react-router-dom'

const LandingPage = ()=> {
    return(
        <div className= { styles.mainContainer }>
            <NavLink to= '/home' >
                <button className= { styles.button} >Home Page</button>
            </NavLink>
        </div>
    )
}

export default LandingPage