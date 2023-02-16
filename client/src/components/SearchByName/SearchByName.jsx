import styles from './SearchByName.module.css';

const SearchByName = ()=> {
    return(
        <>
            <h2>Search Country</h2>
            <input className= { styles.input } type='text' placeholder= 'Country name...' />
        </>
    )
}

export default SearchByName