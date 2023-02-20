import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { CardDetailCountry, CardDetailCountryActivities, ErrorMsj } from "../../components"

const Detail = ()=> {
    const { idCountry } = useParams()
    const [ country, setCountry ] = useState( {} )

    useEffect( ()=>{
        try {
            axios( `http://localhost:3001/countries/${ idCountry }` )
            .then( ( { data } ) => { 
                if( data ) {
                    setCountry( data )
                } else {
                    throw Error( `Unexpected error loading country in 'Country Detail'. Id Country: '${ idCountry }'` )
                }   
            } )
        } catch (error) {
            <ErrorMsj error= { error.message } />
        }

        return setCountry( {} )
     }, [ idCountry ] )

    return(
        <div>
            { country && 
                <div>
                    <CardDetailCountry
                        id= { country.id }
                        name= { country.name }
                        flag= { country.flag }
                        continent= { country.continent }
                        capital= { country.capital }
                        subregion= { country.subregion }
                        area= { country.area }
                        population= { country.population }
                    /> 
                </div>
            } 
            { country.Activities && 
                <div>
                    { country.Activities.map( activity =>
                        <CardDetailCountryActivities
                            key= { activity.name }
                            name= { activity.name }
                            dificulty= { activity.dificulty }
                            duration= { activity.duration }
                            seasons= { activity.seasons }
                        />
                    )}
                </div>
            }
        </div>
    )
}

export default Detail