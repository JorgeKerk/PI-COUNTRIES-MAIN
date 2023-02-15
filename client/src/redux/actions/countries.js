import axios from 'axios'
import {   
        GET_ALL_COUNTRIES, 
        GET_COUNTRY_BY_ID, 
        GET_COUNTRIES_BY_NAME,
        SET_CURRENT_COUNTRIES
} from '../actionsTypes'

const getAllCountries =  ()=> {
    return async ( distpach )=>{
        try {
            const { data } = await axios( 'http://localhost:3001/countries' )
            return distpach( { type: GET_ALL_COUNTRIES, payload: data } )
        } catch (error) {
            // ver como mostrar el error (component?)
        }
    }
}

const getCountryById =  ( idPais )=> {
    return async ( distpach )=>{
        try {
            const { data } = await axios( `http://localhost:3001/countries/${ idPais }` )
            return distpach( { type: GET_COUNTRY_BY_ID, payload: data } )
        } catch (error) {
            // ver como mostrar el error (component?)
        }
    }
}

const getCountryByName =  ( name )=> {
    return async ( distpach )=>{
        try {
            const { data } = await axios( `http://localhost:3001/countries/?name=${ name }` )
            return distpach( { type: GET_COUNTRIES_BY_NAME, payload: data } )
        } catch (error) {
            // ver como mostrar el error (component?)
        }
    }
}

const setCurrentCountries = ( countriesFiltered )=> ( { type: SET_CURRENT_COUNTRIES, payload: countriesFiltered } )

export { 
    getAllCountries, 
    getCountryById, 
    getCountryByName,
    setCurrentCountries
}