import  { 
    GET_ALL_COUNTRIES,  
    GET_COUNTRIES_BY_NAME,
    SET_CURRENT_COUNTRIES,
    CREATE_ACTIVITY, 
    GET_ALL_ACTIVITIES,
    SET_CURRENT_PAGE
} from '../actionsTypes'

const initialState = {
    countries: [],
    countriesFilter: [],
    currentCountries: [],
    currentPageCountries: 0,
    // currentOrdeningCountries: '',
    // currentFilteringCountries: {
    //     name: '',
    //     continent: ''
    // },
    activities: []
}

const rootReducer = ( state = initialState, { type, payload } )=> {
    switch( type ){
        case GET_ALL_COUNTRIES:
            return { 
                ...state, 
                countries: payload, 
                countriesFilter: payload, 
                currentCountries: payload.slice(0,10),
                currentPageCountries: 1
            }
        case GET_COUNTRIES_BY_NAME:
            return { 
                ...state, 
                countriesFilter: payload, 
                currentCountries: payload.slice(0,10),
                currentPageCountries: 1
             }
        case SET_CURRENT_COUNTRIES:
            return { ...state, currentCountries: payload }
        case SET_CURRENT_PAGE:
            return { ...state, currentPageCountries: payload }
        case CREATE_ACTIVITY:
            return { ...state, activities: [ ...state.activities, payload ] }
        case GET_ALL_ACTIVITIES:
            return { ...state, activities: payload } 
        default:
            return { ...state }
    }
}

export default rootReducer