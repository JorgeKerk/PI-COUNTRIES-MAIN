import styles from './ActivitySeasons.module.css';

import { useDispatch, useSelector } from "react-redux"
import { setNewActivity } from "../../../redux/actions"
import { ErrorMsj } from "../../CommonComponents"

const ActivitySeasons = ()=> {
    const { newActivity, errorNewActivity } = useSelector( state => state )
    const dispatch = useDispatch()

    const handleChange = ( event ) => {
        const seasonSelected = event.target.value
        let newSeasons = [ ...newActivity.seasons ]

        event.target.checked
            ? newSeasons.push( event.target.value )
            : newSeasons = newSeasons.filter( season => season !== seasonSelected )
 
        const errorMsg = !newSeasons.length
            ? 'Must select at least one season' 
            : ''

        dispatch( setNewActivity( { prop: 'seasons', value: newSeasons, error: errorMsg } ) )
    }

    return(
        <div className= { styles.mainContiner } onChange= { handleChange } >
            <span>Seasons </span>
            {/* <div> */}
                <input type= 'checkbox' id= 'summer' name= 'seasons' value= 'summer' />
                <label htmlFor='summer'> Summer</label>
            {/* </div>
            <div> */}
                <input type= 'checkbox' id= 'autumn' name= 'seasons' value= 'autumn' />
                <label htmlFor='autumn'> Autumn</label>
            {/* </div>
            <div> */}
                <input type= 'checkbox' id= 'winter' name= 'seasons' value= 'winter' />
                <label htmlFor='winter'> Winter</label>
            {/* </div>
            <div> */}
                <input type= 'checkbox' id= 'spring' name= 'seasons' value= 'spring' />
                <label htmlFor='spring'> Spring</label>
            {/* </div> */}
            <div className= { styles.error }>
                { errorNewActivity.seasons && <ErrorMsj error= { errorNewActivity.seasons } isActivity= { true } /> }
            </div>
        </div>
    )
}

export default ActivitySeasons