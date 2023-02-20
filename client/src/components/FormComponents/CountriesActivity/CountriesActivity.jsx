import styles from './CountriesActivity.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setNewActivity } from '../../../redux/actions';
import { ErrorMsj } from '../../CommonComponents';

const CountriesActivity = ()=> {
    const { allCountries } = useSelector( state => state )
    const dispatch = useDispatch()
    const [ selCountries, setSelCountries ] = useState( { values: [], error: ''} )

    useEffect( ()=>{
        if( !selCountries.values.length ){
            const allCountriesWithSelected = allCountries.map( country => ( { ...country, selected: false } ) )
            setSelCountries( { values: allCountriesWithSelected, error: 'Must select at least one country' } )
        }
    }, [allCountries, selCountries] )
 
    const handleClickCountry = ( event )=> {
        const selCountriesChanged = selCountries.values.map( country => {
            return country.name === event.target.name
            ? { ...country, selected: !country.selected }
            : country
        } )

        const countriesActivity = selCountriesChanged.filter(country => country.selected ).map( country => country.id )
        let errorMsg = !countriesActivity.length ? 'Must select at least one season' : ''

        setSelCountries( { values: selCountriesChanged, error: errorMsg } )
        dispatch( setNewActivity( { prop: 'countriesIds', value: countriesActivity } ) )
    }

    const displayCountries = ( selected )=>(
        <div className= { styles.countries }>
            {
                selCountries.values.map( country =>{
                    return ( country.selected === selected )
                        ?   <div className= { styles.country } key= { country.name } >
                                <div>
                                    <img className= { styles.flag } src= { country.flag } alt= { country.name } />
                                    <span className= { styles.name } > { country.name }</span>
                                </div>
                                <div>
                                    <button  
                                        type='button'
                                        className= { selected ? styles.buttonSel : styles.buttonUnSel } 
                                        onClick= { handleClickCountry } 
                                        name= { country.name } >{ selected ? '▼' : '▲' }</button>
                                </div>
                            </div>
                        : null
                })
            }
            { selCountries.error && <ErrorMsj error= { selCountries.error } isActivity= { true } /> }
        </div>
    )

    return(
        <div className= { styles.mainContainer } >
            <div>
                <h1>Countries with this activity</h1>
                { selCountries.values.length && displayCountries( true ) }
            </div>
            <div>
                <h1>Available countries</h1>
                { selCountries.values.length && displayCountries( false ) }
            </div>
        </div>
    )
}

export default CountriesActivity