import styles from './Pagination.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { setCurrentCountries, setCurrentPage } from '../../redux/actions'

const Pagination = ()=> {
    const { countriesFilter, currentPageCountries } = useSelector( state => state )
    const [ pages, setPages ] = useState( [] )
    // const [ pageSelected, setPageSelected ] = useState( 1 )

    const disppatch = useDispatch()

    const handleClickPage = (event)=> {
        const numberPage = Number( event.target.outerText )
        const posInitCountryPage = ( numberPage -1 ) * 10
        const posEndCountryPage = posInitCountryPage + 10
        console.log('Entro a Click handler');
        disppatch( setCurrentPage( numberPage ) )
        disppatch(setCurrentCountries( countriesFilter.slice( posInitCountryPage, posEndCountryPage ) ) )
    }

    useEffect(()=> {
        const nPages = Math.ceil( countriesFilter.length / 10 )
        const arrayPages = []

        for( let i=1; i <= nPages; i++ ){
            arrayPages.push( i ) 
        }
        setPages( arrayPages )
    }, [ countriesFilter ] )
    
    return(
        <div className= { styles.mainContainer } >
            {console.log(currentPageCountries)}
            { pages && pages.map( page => 
                <span 
                    className= { currentPageCountries === Number(page) ? styles.pagePageSelected : styles.pagePagination } 
                    key= { page }
                    name= { page }
                    onClick={ handleClickPage }>
                    {page}
                </span>)}
        </div>
    )
}

export default Pagination