import styles from './CardsContainerCountries.module.css'
import CardCountry from '../CardCountry/CardCountry'
// import { useEffect } from 'react'
import { useSelector } from 'react-redux'
// import { setCurrentCountries } from '../../redux/actions'

const CardsContainerCountries = ()=> {
    const { countries, currentCountries } = useSelector( state => state )
    // const dispatch = useDispatch()

    // useEffect( ()=> {
    //     if( !countries.length ){
    //         console.log(countries);
    //         dispatch( setCurrentCountries( countries.slice( 0, 10 ) ) )
    //     }
    // // }, [ countries, dispatch ] )
    // data.filter((item,index)=>{
    //     return data.indexOf(item) === index;
    //   }) 
    countries && console.log( new Set(countries.map( c => c.continent)))
    return(
        <div className= { styles.mainContainer } >
            { currentCountries.length && currentCountries.map( ( { id, name, flag, continent, population } )=> (
                <CardCountry 
                    key= { id} 
                    id= { id }
                    name= { name }
                    flag= { flag }
                    continent= { continent }
                    population= { population }
                />
            ))}
        </div>
    )
}

export default CardsContainerCountries