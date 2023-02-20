const { Activity, Country } = require( '../db' )

const getAllActivities = async ()=> await Activity.findAll( 
    { 
        include: { 
            model: Country,            
            attributes: [ "id" ],
            through: { attributes: [] }
        } 
    } 
)

const createActivity = async ( name, dificulty, duration, seasons, countriesIds )=>{
    if( !name ) throw Error( `Debe especificar el 'nombre' de la actividad` )
    name = name.toUpperCase()

    const findActivity = await Activity.findOne( { where: { name } } )
    if( findActivity ) throw Error( `La actividad '${ name }' ya existe` )

    if( !dificulty ) throw Error( `Debe especificar la 'dificultad' de la actividad (un valor entero entre 1 y 5 inclusive)` )
    if( isNaN( dificulty ) ) throw Error( `La 'dificultad' debe ser numérica (un valor entero entre 1 y 5 inclusive)` )
    dificulty = Number( dificulty )
    if( dificulty < 1 || dificulty > 5 ) throw Error( `La 'dificultad' debe ser un valor entero entre el 1 y el 5 inclusive` )
    
    if( !seasons ) throw Error( `Debe especificar una 'Temporada' (Valores permitidos: 'verano', 'otoño', 'invierno' o 'primavera')`)
    let seasonValues = ['summer', 'autumn', 'winter', 'spring']
    seasons = seasons.map( season => {
        const seasonLow = season.toLowerCase()
        if( seasonValues.includes( seasonLow ) ){
            seasonValues = seasonValues.filter( seasonV => seasonV !== seasonLow )
            return season.at().toUpperCase().concat( season.slice( 1 ) )
        }else {
            throw Error( `'${ season }' está repetido o no es una temporada válida (Valores permitidos: 'verano', 'otoño', 'invierno' o 'primavera')` ) 
        }
    })
    
    if( !countriesIds || !countriesIds.length ) throw Error( `Debe especificar aunque sea un Id de país` )
    const promCountriesIds = countriesIds.map( async ( countryId ) => {
        try {
            countryId = countryId.toUpperCase()
            const findCountry = await Country.findByPk( countryId )
            if( !findCountry ) throw Error( `El código de país '${ countryId }' no es válido` )
            return countryId
        } catch ( error ) {
            throw Error( error.message )
        }
    } )
    countriesIds = (await Promise.all( promCountriesIds )).map( countryId => countryId )

    const newActivity = await Activity.create(
        {
            name, 
            dificulty, 
            duration, 
            seasons
        }
    )

    await newActivity.addCountry( countriesIds )

    return newActivity
}

module.exports = { getAllActivities, createActivity }