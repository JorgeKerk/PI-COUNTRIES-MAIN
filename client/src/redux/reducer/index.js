import  { 
    GET_ALL_COUNTRIES,  
    GET_COUNTRIES_BY_NAME,
    SET_CURRENT_COUNTRIES,
    CREATE_ACTIVITY, 
    GET_ALL_ACTIVITIES 
} from '../actionsTypes'

const initialState = {
    countries: [],
    countriesFilter: [],
    currentCountries: [],
    activities: []
}

const rootReducer = ( state = initialState, { type, payload } )=> {
    switch( type ){
        case GET_ALL_COUNTRIES:
            return { ...state, countries: payload, countriesFilter: payload, currentCountries: payload.slice(0,10) }
        case GET_COUNTRIES_BY_NAME:
            return { ...state, countriesFilter: payload, currentCountries: payload.slice(0,10) }
        case SET_CURRENT_COUNTRIES:
            return { ...state, currentCountries: payload }
        case CREATE_ACTIVITY:
            return { ...state, activities: [ ...state.activities, payload ] }
        case GET_ALL_ACTIVITIES:
            return { ...state, activities: payload } 
        default:
            return { ...state }
    }
}

export default rootReducer