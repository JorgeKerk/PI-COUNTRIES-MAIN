import styles from './CardsContainerCountries.module.css'
import CardCountry from '../CardCountry/CardCountry'
// import { useEffect } from 'react'
import { useSelector } from 'react-redux'
// import { setCurrentCountries } from '../../redux/actions'

const CardsContainerCountries = ()=> {
    const { currentCountries } = useSelector( state => state )
    // const dispatch = useDispatch()

    // useEffect( ()=> {
    //     if( !countries.length ){
    //         console.log(countries);
    //         dispatch( setCurrentCountries( countries.slice( 0, 10 ) ) )
    //     }
    // }, [ countries, dispatch ] )

    return(
        <div className= { styles.mainContainer } >
            { currentCountries.length && currentCountries.map( ( { id, name, flag, continent, capital, subregion, area, population } )=> (
                <CardCountry 
                    key= { id} 
                    id= { id }
                    name= { name }
                    flag= { flag }
                    continent= { continent }
                    capital= { capital }
                    subregion= { subregion }
                    area= { area }
                    population= { population }
                />
            ))}
        </div>
    )
}

export default CardsContainerCountries