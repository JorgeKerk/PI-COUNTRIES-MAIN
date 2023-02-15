const axios = require('axios')
const { Country } = require('../db')

const getApiData = async ()=> {
    try {
        const { data } = await axios(`https://restcountries.com/v3/all`)

        const allCountries = data.map( country => (
             {
                id: country.cca3,
                name: country.translations.spa.official,
                flag: country.flags[0],
                continent: country.continents.join(),
                capital: country.capital? country.capital.join().toString() : 'Not defined',
                subregion: country.subregion? country.subregion : null,
                area: country.area? country.area : null,
                population: country.population,
            }
         ) )

        return allCountries
    } catch (error) {
        throw Error( `Error API request: ${ error.message }` )
    }
}

const saveApiData = async ()=>{
    try {
        let allCountriesBD = await Country.findAll()
        const allCountriesAPI = await getApiData()
        
        if( !allCountriesBD.length ){
            await Country.bulkCreate( allCountriesAPI )
        } else {
            allCountriesBD = [ ...allCountriesBD, ...allCountriesAPI ]
            allCountriesBD.forEach( country => {      
                Country.findOrCreate( {
                    where: { id: country.id }
                })
            })
        }
        return allCountriesBD
    } catch (error) {
        if( error.message.includes( 'Error API request:' ) ) throw Error( error.message )
        throw Error( `Error DB request: ${ error.message }` )
    }
}

module.exports = saveApiData