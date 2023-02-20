import styles from './CardDetailCountryActivities.module.css';

const CardDetailCountryActivities = ( { name, dificulty, duration, seasons } )=> {
    return(
        <div className= { styles.mainContainer } >
            <h1>{ name }</h1>
            <p>{ dificulty }</p>
            <p>{ duration } { duration === 1? 'hour': 'hours' }</p>
            <p>{ seasons.join( ' / ' ) }</p>
        </div>
    )
}

export default CardDetailCountryActivities