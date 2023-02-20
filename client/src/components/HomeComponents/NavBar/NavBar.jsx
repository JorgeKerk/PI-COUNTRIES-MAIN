import { Link } from 'react-router-dom';
import styles from './NavBar.module.css'

const NavBar = ()=> {
    return(
        <div className={ styles.mainContainer }>
            <Link to='/home' >HOME</Link>
            <Link to='/create' >CREATE ACTIVITY</Link>
        </div>
    )
}

export default NavBar