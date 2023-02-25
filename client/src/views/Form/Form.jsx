import styles from './Form.module.css'
import { 
    ActivityDificulty, 
    ActivityDuration, 
    ActivityName, 
    ActivitySeasons, 
    CountriesActivity,
    ErrorMsj
} from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { clearNewActivity, createActivity, setCountriesByActivities } from '../../redux/actions'


const Form = ()=> {
    const { newActivity, error } = useSelector( state => state )
    const dispatch = useDispatch()

    const controlErrors = ( { name, dificulty, duration, seasons, countriesIds } )=> 
        !name || !dificulty || !duration || !seasons.length || !countriesIds.length
    
    useEffect( ()=>{
        dispatch( setCountriesByActivities() )
        return ()=>{
            dispatch( clearNewActivity() )
        }
    }, [dispatch])

    const handleSubmit = ( event )=> {
        event.preventDefault()
        dispatch( createActivity( newActivity ) )
        event.target.reset()
    }
    
    return(
        <form className= { styles.mainContainer } onSubmit= { handleSubmit }>
            { !error
                ?<>
                    <h1 className= { styles.titleActivity }>New Tourist Activity </h1>
                    <div className= { styles.subContainer } >
                        <div className= { styles.componentActivityContainer }>
                            <div className= { styles.componentActivity } >
                                <ActivityName />
                            </div>
                            <div className= { styles.componentActivity } >
                                <ActivityDificulty />
                            </div>
                            <div className= { styles.componentActivity } >
                                <ActivityDuration />
                            </div>
                            <div className= { styles.componentActivity } >
                                <ActivitySeasons />
                            </div>
                        </div>
                        <div className= { styles.componentCountriesActivity } >
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
                </>
                : <ErrorMsj error= { error } />
            }
        </form>
    )
}

export default Form