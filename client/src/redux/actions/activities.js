import axios from 'axios'
import {   
        CREATE_ACTIVITY,
        GET_ALL_ACTIVITIES
} from "../actionsTypes"



const createActivity =  ( activity )=> {
    return async ( distpach )=>{
        try {
            const { data } = await axios.post( `http://localhost:3001/activities/`, activity )
            return distpach( { type: CREATE_ACTIVITY, payload: data } )
        } catch (error) {
            // ver como mostrar el error (component?)
        }
    }
}

const getAllActivities =  ()=> {
    return async ( distpach )=>{
        try {
            const { data } = await axios( 'http://localhost:3001/activities' )
            return distpach( { type: GET_ALL_ACTIVITIES, payload: data } )
        } catch (error) {
            // ver como mostrar el error (component?)
        }
    }
}

export { 
    createActivity,
    getAllActivities
}