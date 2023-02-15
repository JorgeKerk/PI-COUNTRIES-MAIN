import React from 'react';
import styles from './Background.module.css'
import imgBackground from '../../img/backgroundImage.jpg'

const Background = ( {children} )=> {
    return(
        <div className= { styles.background }>
            <img className= { styles.image } src= { imgBackground } alt="World map" />
            { children }
        </div>
    )
}

export default Background