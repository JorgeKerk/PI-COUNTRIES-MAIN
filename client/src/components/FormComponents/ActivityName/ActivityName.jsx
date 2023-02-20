// import styles from './ActivityName.module.css';

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setNewActivity } from "../../../redux/actions"
import { ErrorMsj } from "../../CommonComponents"

const ActivityName = ()=> {
    const { activities } = useSelector( state => state )
    const [ nameActivity, setNameActivity ] = useState( { name: '', error: 'The name of the activity cannot be less than 3 characters' } )
    const dispatch = useDispatch()

    const handleChange = ( event )=> {
        const newNameActivity = event.target.value

        let errorMsg = ''

        if( newNameActivity.length < 3 ) 
            errorMsg = 'The name of the activity cannot be less than 3 characters'

        if( newNameActivity && activities.find( activity => activity.name === newNameActivity.toUpperCase() ) ) 
            errorMsg = 'Activity name already exists'

        setNameActivity( { name: newNameActivity, error: errorMsg } )
        dispatch( setNewActivity( { prop: 'name', value: errorMsg ? '' : newNameActivity } ) )
    }

    return(
        <>
            <label htmlFor='name'>Activity name</label>
            <input 
                type= 'text' 
                id= 'name' 
                name= 'name' 
                placeholder= 'name of activity...' 
                value= { nameActivity.name }
                onChange= { handleChange }
            />

            { nameActivity.error && <ErrorMsj error= { nameActivity.error } isActivity= { true } /> }
        </>
    )
}

export default ActivityName