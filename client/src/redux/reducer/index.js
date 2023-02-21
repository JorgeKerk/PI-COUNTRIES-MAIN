import  { 
    GET_ALL_COUNTRIES,  
    GET_COUNTRIES_BY_NAME,
    SET_CURRENT_COUNTRIES,
    SET_COUNTRIES_BY_ACITVITIES,
    CREATE_ACTIVITY, 
    GET_ALL_ACTIVITIES,
    SET_CURRENT_PAGE, 
    SET_NAME_COUNTRIES,
    SET_FILTER_BY_CONTINENTS,
    SET_FILTER_BY_ACTIVITY,
    SET_ORDER, 
    SET_NEW_ACTIVITY,
    CLEAR_NEW_ACTIVITY,
    SET_ERROR
} from '../actionsTypes'

import applyFiltersInCountries from './functionsReducer'

const initialState = {
    allCountries: [],
    countries: [],
    countriesFilter: [],
    currentCountries: [],
    currentPageCountries: 0,
    countriesFilterSettings: {
        name: '',
        continents: [],
        activity: 'All',
        order: [ 'name', 'ascending' ]
    },
    activities: [],
    newActivity: {
        name: '',
        dificulty: 0,
        duration: 0,
        seasons: [],
        countriesIds: []
    },
    errorNewActivity: {
        name: 'The name of the activity cannot be less than 3 characters',
        dificulty: 'Must select a difficulty',
        duration: 'Duration must be greater than or equal to 1',
        seasons: 'Must select at least one season',
        countriesIds: 'Must select at least one country'
    },
    error: ''
}

const rootReducer = ( state = initialState, { type, payload } )=> {
    switch( type ){
        case GET_ALL_COUNTRIES:
            const newState = applyFiltersInCountries( '', state, payload )

            return {
                ...newState,
                allCountries: payload
            }
        case GET_COUNTRIES_BY_NAME:
            return applyFiltersInCountries( '', state, payload )

        case SET_CURRENT_COUNTRIES:
            return { 
                ...state, 
                currentCountries: payload 
            }

        case SET_CURRENT_PAGE:
            return { 
                ...state, 
                currentPageCountries: payload 
            }

        case CREATE_ACTIVITY:
            return { 
                ...state,
                allCountries: state.allCountries.map( country => ( { ...country, selected: false } ) ),
                newActivity: { ...initialState.newActivity },
                errorNewActivity: { ...initialState.errorNewActivity },
                activities: [ 
                    ...state.activities, 
                    payload 
                ]
            }

        case GET_ALL_ACTIVITIES:
            return { 
                ...state, 
                error: '', 
                activities: payload 
            } 

        case SET_NAME_COUNTRIES:
            return { 
                ...state, 
                countriesFilterSettings: { 
                    ...state.countriesFilterSettings, 
                    name: payload 
                } 
            }

        case SET_FILTER_BY_CONTINENTS:
            return applyFiltersInCountries( 'continents', state, payload )
        
        case SET_FILTER_BY_ACTIVITY:
            return applyFiltersInCountries( 'activity', state, payload )
            
        case SET_ORDER: 
            return applyFiltersInCountries( 'order', state, payload )
        
        case SET_NEW_ACTIVITY:
            return {
                ...state,
                newActivity: 
                    { 
                        ...state.newActivity, 
                        [ payload.prop ]: payload.value 
                    },
                errorNewActivity:
                    {
                        ...state.errorNewActivity,
                        [ payload.prop ]: payload.error
                    }
            }

        case SET_ERROR:
            return {
                ...state,
                countries: [],
                countriesFilter: [],
                currentCountries: [],
                error: payload
            }
        
        case CLEAR_NEW_ACTIVITY:
            return {
                ...state,
                newActivity: { ...initialState.newActivity },
                errorNewActivity: { ...initialState.errorNewActivity }
            }
        
        case SET_COUNTRIES_BY_ACITVITIES:
            return {
                ...state,
                allCountries: state.allCountries.map( country => ( { ...country, selected: false } ) )
            }

        default:
            return { 
                ...state 
            }
    }
}

export default rootReducer