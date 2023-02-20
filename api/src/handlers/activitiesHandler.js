const { getAllActivities, createActivity } = require( '../controllers' )

const getAllActivitiesHandler = async ( req, res )=> {
    try {
        const allActivities = await getAllActivities()
        return res.status( 200 ).json( allActivities )
    } catch ( error ) {
        return res.status( 400 ).json( { error: error.message } )
    }
}

const createActivityHandler = async ( req, res )=> {
    const { name, dificulty, duration, seasons, countriesIds } = req.body
    try {
        console.log(name, dificulty, duration, seasons, countriesIds);
        const newActivity = await createActivity( name, dificulty, duration, seasons, countriesIds )
        return res.status( 200 ).json( newActivity )
    } catch ( error ) {
        return res.status( 400 ).json( { error: error.message } )
    }
}

module.exports = { getAllActivitiesHandler, createActivityHandler }