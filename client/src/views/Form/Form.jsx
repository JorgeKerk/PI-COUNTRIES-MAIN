import styles from './Form.module.css'
import { 
    ActivityDificulty, 
    ActivityDuration, 
    ActivityName, 
    ActivitySeasons, 
    CountriesActivity
} from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllCountries, clearNewActivity, createActivity, getAllActivities } from '../../redux/actions'


const Form = ()=> {
    const { newActivity, allCountries, activities } = useSelector( state => state )
    const dispatch = useDispatch()

    const controlErrors = ( { name, dificulty, duration, seasons, countriesIds } )=> 
        !name || !dificulty || !duration || !seasons.length || !countriesIds.length
    
    useEffect( ()=>{
        if( !allCountries.length ) dispatch( getAllCountries() )
        return ()=>{
            if( !activities.length ) dispatch( getAllActivities() )
            dispatch( clearNewActivity() )
        }
    }, [activities, allCountries, dispatch])

    const handleSubmit = ( event )=> {
        dispatch( createActivity( newActivity ) )
        // event.preventDefault()
    }
    
    return(
        <form className= { styles.mainContainer } onSubmit= { handleSubmit }>
            <h1>New Tourist Activity </h1>
            <div className= { styles.subContainer } >
                <div>
                    <div>
                        <ActivityName />
                    </div>
                    <div>
                        <ActivityDificulty />
                    </div>
                    <div>
                        <ActivityDuration />
                    </div>
                    <div>
                        <ActivitySeasons />
                    </div>
                </div>
                <div>
                    <div>
                        <CountriesActivity />
                    </div>
                </div>
            </div>
            {
                controlErrors( newActivity )
                ? <button type= 'submit' className= { styles.buttonDisabled } disabled >Crate activity</button>
                : <button type='submit' className= { styles.button } >Crate activity</button>
            }
        </form>
    )
}

export default Form