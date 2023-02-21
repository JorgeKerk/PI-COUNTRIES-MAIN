// import styles from './ActivityDificulty.module.css';

import { useDispatch, useSelector } from "react-redux"
import { setNewActivity } from "../../../redux/actions"
import { ErrorMsj } from "../../CommonComponents"

const ActivityDificulty = ()=> {
    const { errorNewActivity } = useSelector( state => state )
    const dispatch = useDispatch()

    const handleChange = ( event ) => {
        const valueSelect = parseInt(event.target.value)
        dispatch( setNewActivity( { prop: 'dificulty', value: valueSelect, error: '' } ) )
    }

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
             { errorNewActivity.dificulty && <ErrorMsj error= { errorNewActivity.dificulty } isActivity= { true } /> }
        </div>
    )
}

export default ActivityDificulty