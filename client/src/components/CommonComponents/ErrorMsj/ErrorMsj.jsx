import styles from './ErrorMsj.module.css';

const ErrorMsj = ( { error, isActivity = false } )=> {
    return(
        <div className= { !isActivity ? styles.mainCountries : styles.mainActivity } >
            <h1>{ error }</h1>
        </div>
    )
}

export default ErrorMsj