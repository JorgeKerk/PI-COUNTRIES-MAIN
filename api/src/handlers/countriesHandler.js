const { getAllCountries, getCountryById } = require( '../controllers' )

const getAllCountriesHandler = async ( req, res )=> {
    const { name } = req.query
    try {
        const allCountries = await getAllCountries( name )
        return res.status( 200 ).json( allCountries )
    } catch ( error ) {
        return res.status( 400 ).json( { error: error.message } )
    }
}

const getCountryByIdHandler = async ( req, res )=> {
    const { idPais } = req.params
    try {
        const countryById = await getCountryById( idPais )
        return res.status( 200 ).json( countryById )
    } catch ( error ) {
        return res.status( 400 ).json( { error: error.message } )
    }
}

module.exports = { getAllCountriesHandler, getCountryByIdHandler }