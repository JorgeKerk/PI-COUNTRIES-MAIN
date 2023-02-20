// import styles from './ActivityDuration.module.css';

import { useState } from "react"
import { useDispatch } from "react-redux"
import { setNewActivity } from "../../../redux/actions"
import { ErrorMsj } from "../../CommonComponents"

const ActivityDuration = ()=> {
    const dispatch = useDispatch()

    const [ durationValue, setDurationValue ] = useState( { duration: 0, error: 'Duration must be greater than or equal to 1' } )

    const handleChange = ( event ) => {
        const newDuration = { duration: parseInt(event.target.value), error: '' }

        if( newDuration.duration < 1 )
            newDuration.error = 'Duration must be greater than or equal to 1'
        
        setDurationValue( newDuration )

        dispatch( setNewActivity( { prop: 'duration', value: newDuration.error ? 0 : newDuration.duration } ) )
    }

    return(
        <>
            <label htmlFor='duration'>Duration </label>
            <input 
                type= 'number' 
                id= 'duration' 
                name= 'duration' 
                value= { durationValue.duration }
                onChange= { handleChange }
            />
            <span>{ !durationValue.duration ? '' : Math.abs(durationValue.duration) === 1 ? ' hour' : ' hours' }</span>
            { durationValue.error && <ErrorMsj error= { durationValue.error } isActivity= { true} /> }
        </>
    )
}

export default ActivityDuration