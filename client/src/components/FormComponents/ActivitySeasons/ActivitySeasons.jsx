// import styles from './ActivitySeasons.module.css';

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setNewActivity } from "../../../redux/actions"
import { ErrorMsj } from "../../CommonComponents"

const ActivitySeasons = ()=> {
    const { seasons } = useSelector( state => state.newActivity )
    const dispatch = useDispatch()
    const [ errors, setErrors ] = useState( 'Must select at least one season' )

    const handleChange = ( event ) => {
        const seasonSelected = event.target.value
        let newSeasons = [ ...seasons ]

        event.target.checked
            ? newSeasons.push( event.target.value )
            : newSeasons = newSeasons.filter( season => season !== seasonSelected )
 
        !newSeasons.length
            ? setErrors( 'Must select at least one season' )
            : setErrors( '' )

        dispatch( setNewActivity( { prop: 'seasons', value: newSeasons } ) )
    }

    return(
        <div onChange= { handleChange } >
            <p>Seasons </p>
            <div>
                <input type= 'checkbox' id= 'summer' name= 'seasons' value= 'summer' />
                <label htmlFor='summer'> Summer</label>
            </div>
            <div>
                <input type= 'checkbox' id= 'autumn' name= 'seasons' value= 'autumn' />
                <label htmlFor='autumn'> Autumn</label>
            </div>
            <div>
                <input type= 'checkbox' id= 'winter' name= 'seasons' value= 'winter' />
                <label htmlFor='winter'> Winter</label>
            </div>
            <div>
                <input type= 'checkbox' id= 'spring' name= 'seasons' value= 'spring' />
                <label htmlFor='spring'> Spring</label>
            </div>
            { errors && <ErrorMsj error= { errors } isActivity= { true } /> }
        </div>
    )
}

export default ActivitySeasons