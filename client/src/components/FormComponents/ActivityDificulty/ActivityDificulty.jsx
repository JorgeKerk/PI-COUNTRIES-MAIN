// import styles from './ActivityDificulty.module.css';

import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setNewActivity } from "../../../redux/actions"
import { ErrorMsj } from "../../CommonComponents"

const ActivityDificulty = ()=> {
    const dispatch = useDispatch()
    const [errorMsg, setErrorMsg ] = useState( '' )

    const handleChange = ( event ) => {
        if( errorMsg.length ) setErrorMsg( '' )
        dispatch( setNewActivity( { prop: 'dificulty', value: parseInt(event.target.value) } ) )
    }

    useEffect( ()=> {
        setErrorMsg(  'Must select a difficulty' )
    },[])

    return(
        <div onChange= { handleChange }>
           <p>Dificulty </p>
            <div>
                <input 
                    type= 'radio' 
                    id= 'easy' 
                    name= 'dificulty' 
                    value= { 1 }
                />
                <label htmlFor='easy'> Easy</label>
            </div>
            <div>
                <input 
                    type= 'radio' 
                    id= 'normal' 
                    name= 'dificulty' 
                    value= { 2 } 
                />
                <label htmlFor='normal'> Normal</label>
            </div>
            <div>
                <input 
                    type= 'radio' 
                    id= 'medium' 
                    name= 'dificulty' 
                    value= { 3 } 
                />
                <label htmlFor='medium'> Medium</label>
            </div>
            <div>
                <input 
                    type= 'radio' 
                    id= 'hard' 
                    name= 'dificulty' 
                    value= { 4 }
                />
                <label htmlFor='hard'> Hard</label>
            </div>
            <div>
                <input 
                    type= 'radio' 
                    id= 'extreme' 
                    name= 'dificulty' 
                    value= { 5 }
                />
                <label htmlFor='extreme'> Extreme</label>
            </div>
             { errorMsg && <ErrorMsj error= { errorMsg } isActivity= { true } /> }
        </div>
    )
}

export default ActivityDificulty