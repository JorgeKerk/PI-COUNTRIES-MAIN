import {
    SET_CURRENT_PAGE
} from '../actionsTypes'

const setCurrentPage = ( number )=> ( { type: SET_CURRENT_PAGE, payload: number } )

export {
    setCurrentPage
}