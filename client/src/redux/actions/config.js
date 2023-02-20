import {
    SET_CURRENT_PAGE,
    SET_ORDER,
    SET_NAME_COUNTRIES,
    SET_FILTER_BY_CONTINENTS,
    SET_NEW_ACTIVITY,
    CLEAR_NEW_ACTIVITY,
    SET_ERROR
} from '../actionsTypes'

const setCurrentPage = ( number )=> ( { type: SET_CURRENT_PAGE, payload: number } )
const setNamCountries = ( name )=> ( { type: SET_NAME_COUNTRIES, payload: name } )
const setOrder = ( order )=> ( { type: SET_ORDER, payload: order } )
const setFilterByContinents = ( continents )=> ( { type: SET_FILTER_BY_CONTINENTS, payload: continents } )
const setNewActivity = ( property )=> ( { type: SET_NEW_ACTIVITY, payload: property } )
const clearNewActivity = ()=> ( { type: CLEAR_NEW_ACTIVITY } )
const setError = ( error )=> ( { type: SET_ERROR, payload: error } )

export {
    setCurrentPage,
    setOrder,
    setNamCountries,
    setFilterByContinents,
    setNewActivity,
    clearNewActivity,
    setError
}