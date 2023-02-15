import styles from './Home.module.css'
import { CardsContainerCountries, Pagination, SearchBar } from "../../components"
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getAllCountries } from '../../redux/actions';

const Home = ()=> {
    const dispatch = useDispatch()

    useEffect( ()=> {
            dispatch( getAllCountries() )
    }, [ dispatch ] )

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