// import styles from './ActivityDuration.module.css';

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setNewActivity } from "../../../redux/actions"
import { ErrorMsj } from "../../CommonComponents"

const ActivityDuration = ()=> {
    const { errorNewActivity } = useSelector( state => state )
    const dispatch = useDispatch()

    const [ durationValue, setDurationValue ] = useState( 0 )

    const handleChange = ( event ) => {
        const newDuration = { duration: parseInt(event.target.value), error: '' }

        if( newDuration.duration < 1 )
            newDuration.error = 'Duration must be greater than or equal to 1'
        
        setDurationValue( newDuration.duration )

        dispatch( 
            setNewActivity( 
                { 
                    prop: 'duration', 
                    value: newDuration.error ? 0 : newDuration.duration, 
                    error: newDuration.error 
                }
            )
        )
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
            { errorNewActivity.duration && <ErrorMsj error= { errorNewActivity.duration } isActivity= { true} /> }
        </>
    )
}

export default ActivityDuration