import { NavLink, useLocation } from 'react-router-dom';
import styles from './NavBar.module.css'

const NavBar = ()=> {
    const pathLocation = useLocation().pathname
    const location = !pathLocation.startsWith( '/detail/') && pathLocation !== '/create'
    return(
        <div className={ styles.mainContainer }>
            { pathLocation !== '/home' && <NavLink className= { styles.navLink } to= '/home' >HOME</NavLink> }
            { location && 
                <>
                    <NavLink className= { styles.navLink } to= '/create' >CREATE ACTIVITY</NavLink>
                    <NavLink className= { styles.navLink } to= '/create' >UPDATE ACTIVITY</NavLink>
                    <NavLink className= { styles.navLink } to= '/create' >DELETE ACTIVITY</NavLink>
                </>
            }
        </div>
    )
}

export default NavBar