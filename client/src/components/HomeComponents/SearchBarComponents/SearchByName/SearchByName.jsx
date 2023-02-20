import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchByName.module.css';
import { getCountryByName, setNamCountries } from '../../../../redux/actions';

const SearchByName = ()=> {
    const { name } = useSelector( state => state.countriesFilterSettings )
    const dispatch = useDispatch()

    const handleChange = ( event )=> {
        const nameSearched = event.target.value

        dispatch( setNamCountries( nameSearched ) )
        dispatch( getCountryByName( nameSearched ) )
    }

    return(
        <>
            <h2>Search Country</h2>
            <input 
                className= { styles.input } 
                type='text' 
                placeholder= 'Country name...' 
                value= { name } 
                onChange= { handleChange }/>
        </>
    )
}

export default SearchByName