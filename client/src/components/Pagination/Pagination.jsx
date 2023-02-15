import styles from './Pagination.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { setCurrentCountries } from '../../redux/actions'

const Pagination = ()=> {
    const { countriesFilter } = useSelector( state => state )
    const [ pages, setPages ] = useState([])
    const disppatch = useDispatch()

    const handleClickPage = (event)=> { 
        event.preventDefault()
        const posInitCountryPage = ( Number( event.target.outerText ) -1 ) * 10
        const posEndCountryPage = posInitCountryPage + 10
        console.log(countriesFilter.slice( posInitCountryPage, posEndCountryPage ))
        disppatch(setCurrentCountries( countriesFilter.slice( posInitCountryPage, posEndCountryPage ) ) )
        // console.log(Number(event.target.outerText))
    }
    useEffect(()=> {
        const nPages = Math.ceil(countriesFilter.length / 10)
        const arrayPages = []

        for( let i=1; i <= nPages; i++ ){
            arrayPages.push( i ) 
        }
        setPages( arrayPages )
    }, [countriesFilter])

    return(
        <div className= { styles.mainContainer } >
            { pages && pages.map( page => 
                <span 
                    className= { styles.pagePAgination } 
                    key= { page }
                    name= { page }
                    onClick={ handleClickPage }>
                    {page}
                </span>)}
        </div>
    )
}

export default Pagination