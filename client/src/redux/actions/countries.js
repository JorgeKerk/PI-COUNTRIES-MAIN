import axios from 'axios'
import {   
        GET_ALL_COUNTRIES, 
        GET_COUNTRIES_BY_NAME,
        SET_CURRENT_COUNTRIES,
        SET_COUNTRIES_BY_ACITVITIES,
        SET_ERROR
} from '../actionsTypes'

const getAllCountries =  ()=> {
    return async ( distpach )=>{
        try {
            const { data } = await axios( 'http://localhost:3001/countries' )
            return distpach( { type: GET_ALL_COUNTRIES, payload: data } )
        } catch (error) {
            return distpach( 
                { 
                    type: SET_ERROR, 
                    payload: `Not found countries. Type Error: ${error.message}` 
                } 
            )
        }
    }
}

const getCountryByName =  ( name )=> {
    return async ( distpach )=>{
        try {
            const { data } = await axios( `http://localhost:3001/countries/?name=${ name }` )
            return distpach( { type: GET_COUNTRIES_BY_NAME, payload: data } )
        } catch (error) {
            return distpach( 
                { 
                    type: SET_ERROR, 
                    payload: `No countries were found that contain the word '${ name }'` 
                } 
            )
        }
    }
}

const setCurrentCountries = ( countriesFiltered )=> ( { type: SET_CURRENT_COUNTRIES, payload: countriesFiltered } )

const setCountriesByActivities = ()=> ( { type: SET_COUNTRIES_BY_ACITVITIES } )

export { 
    getAllCountries, 
    getCountryByName,
    setCurrentCountries,
    setCountriesByActivities
}