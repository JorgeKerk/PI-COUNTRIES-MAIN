const { Activity, Country } = require( '../db' )

// Gets all activities with the ID of the Countries associated with each activity
const getAllActivities = async ()=> await Activity.findAll( 
    { 
        include: { 
            model: Country,            
            attributes: [ "id" ],
            through: { attributes: [] }
        } 
    } 
)

// Create the activity with the data passed by BODY in the handler
const createActivity = async ( name, dificulty, duration, seasons, countriesIds )=>{
    // Control of data passed by parameter

    // The name of the Activity is controlled
    if( !name ) throw Error( `You must specify the 'name' of the activity.` )
    // The names of the Activities in the DB in uppercase are compared and loaded
    name = name.toUpperCase()
    const findActivity = await Activity.findOne( { where: { name } } )
    if( findActivity ) throw Error( `Activity '${ name }' already exist.` )

    // The dificulty is controlled
    if( !dificulty ) throw Error( `You must specify the 'difficulty' of the activity (an integer value between 1 and 5 inclusive).` )
    if( isNaN( dificulty ) ) throw Error( `'Difficulty' must be numeric (an integer value between 1 and 5 inclusive).` )
    dificulty = Number( dificulty )
    if( dificulty < 1 || dificulty > 5 ) throw Error( `'Difficulty' must be an integer value between 1 and 5 inclusive.` )
    
    // The seasons are controlled
    if( !seasons ) throw Error( `You must specify a 'Season' (Allowed values: 'summer', 'autumn', 'winter' or 'spring').`)
    let seasonValues = ['summer', 'autumn', 'winter', 'spring']
    seasons = seasons.map( season => {
        // Check that the seasons sent by BODY are correct
        const seasonLow = season.toLowerCase()
        if( seasonValues.includes( seasonLow ) ){
            seasonValues = seasonValues.filter( seasonV => seasonV !== seasonLow )
            return season.at().toUpperCase().concat( season.slice( 1 ) )
        }else {
            throw Error( `'${ season }' is repeated or is not a valid season (Allowed Values: 'summer', 'autumn', 'winter', or 'spring').` ) 
        }
    })
    
    // The IDs of the countries passed by BODY are controlled
    if( !countriesIds || !countriesIds.length ) throw Error( `You must specify even if it is a country ID` )
    const promCountriesIds = countriesIds.map( async ( countryId ) => {
        // It is controlled that the Country ID entered by BODY exists in the Countries of the DB
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

    // If the data is correct, the new Activity is created in the DB
    const newActivity = await Activity.create(
        {
            name, 
            dificulty, 
            duration, 
            seasons
        }
    )
    
    // The Country IDs entered by BODY are associated with the Activity
    await newActivity.addCountry( countriesIds )
    
    // In the Front, the returned value needs to contain the IDs of Countries associated 
    const newActivityWithCountries = await Activity.findOne( 
        { 
            where: { name },
            include: { 
                model: Country,            
                attributes: [ "id" ],
                through: { attributes: [] }
            } 
        }
    )

    return newActivityWithCountries
}

module.exports = { getAllActivities, createActivity }