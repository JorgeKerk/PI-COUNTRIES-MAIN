import styles from './ActivityName.module.css';

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setNewActivity } from "../../../redux/actions"
import { ErrorMsj } from "../../CommonComponents"

const ActivityName = ()=> {
    const { activities, errorNewActivity } = useSelector( state => state )
    const [ nameActivity, setNameActivity ] = useState( '' )
    const dispatch = useDispatch()

    const handleChange = ( event )=> {
        const newNameActivity = event.target.value

        let errorMsg = ''

        if( newNameActivity.length < 3 ) 
            errorMsg = 'The name of the activity cannot be less than 3 characters'

        if( newNameActivity && activities.find( activity => activity.name === newNameActivity.toUpperCase() ) ) 
            errorMsg = 'Activity name already exists'

        setNameActivity( newNameActivity )
        dispatch( setNewActivity( { prop: 'name', value: errorMsg ? '' : newNameActivity, error: errorMsg } ) )
    }

    return(
        <>
            <div className= { styles.activityName }>
                <label htmlFor='name'>Activity name</label>
                <input 
                    type= 'text' 
                    id= 'name' 
                    name= 'name' 
                    placeholder= 'name of activity...' 
                    value= { nameActivity.name }
                    onChange= { handleChange }
                />
            </div>
            <div className= { styles.error }>
                { errorNewActivity.name && <ErrorMsj error= { errorNewActivity.name } isActivity= { true } /> }
            </div>
        </>
    )
}

export default ActivityName