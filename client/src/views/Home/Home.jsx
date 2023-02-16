import styles from './Home.module.css'
import { CardsContainerCountries, Pagination, SearchBar } from "../../components"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getAllCountries } from '../../redux/actions';

const Home = ()=> {
    const { countries } = useSelector( state => state )
    const dispatch = useDispatch()

    useEffect( ()=> {
        if( !countries.length ) dispatch( getAllCountries() )
    }, [ countries, dispatch ] )

    return(
        <div className= { styles.mainContainer } >
                <SearchBar />
            <div className= { styles.subContainer } >
                <CardsContainerCountries />
                <Pagination />
            </div>
        </div>
    )
}

export default Home