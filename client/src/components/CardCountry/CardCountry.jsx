import styles from './CardCountry.module.css';

const CardCountry = ( { id, name, flag, continent, capital, subregion, area, population } )=> {
    return(
        <div className= { styles.mainContainer } >
            <img src={ flag } alt={`Flag to ${ name }`} className= { styles.imgFlag } />
            <p>{ name }</p>
            <p>{ continent }</p>
            <p>{ capital }</p>
            <p>{ subregion }</p>
            <p>{ area }</p>
            <p>{ population }</p>
        </div>
    )
}

export default CardCountry