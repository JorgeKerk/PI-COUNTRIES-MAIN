import axios from 'axios'
import {   
        CREATE_ACTIVITY,
        GET_ALL_ACTIVITIES,
        SET_FILTER_BY_ACTIVITY,
        SET_ERROR
} from "../actionsTypes"



const createActivity =  ( activity )=> {
    return async ( distpach )=>{
        try {
            const { data } = await axios.post( `http://localhost:3001/activities/`, activity )
            return distpach( { type: CREATE_ACTIVITY, payload: data } )
        } catch (error) {
            window.alert(error.message);
            // return distpach( 
            //     { 
            //         type: SET_ERROR, 
            //         payload: `Could not create activity ${ activity.name }. Type Error: ${error.message}` 
            //     } 
            // )
        }
    }
}

const getAllActivities =  ()=> {
    return async ( distpach )=>{
        try {
            const { data } = await axios( 'http://localhost:3001/activities' )
            return distpach( { type: GET_ALL_ACTIVITIES, payload: data } )
        } catch (error) {
            return distpach( 
                { 
                    type: SET_ERROR, 
                    payload: `Not found activities. Type Error: ${error.message}` 
                } 
            )
        }
    }
}

const setFilterByActivity = ( activity )=> ( { type: SET_FILTER_BY_ACTIVITY, payload: activity } )

export { 
    createActivity,
    getAllActivities,
    setFilterByActivity
}