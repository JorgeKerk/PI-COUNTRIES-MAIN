import styles from './CardDetailCountry.module.css';

const CardDetailCountry = ( { id, name, flag, continent, capital, subregion, area, population} )=> {
    return(
        <div className= { styles.mainContainer } >
            <img src= { flag } alt= { name } />
            <h1>{ name }</h1>
            <p>{ id }</p>
            <p>{ continent }</p>
            <p>{ capital }</p>
            { subregion && <p>{ subregion }</p> }
            { area && <p>{ area }</p> }
            <p>{ population }</p>
        </div>
    )
}

export default CardDetailCountry