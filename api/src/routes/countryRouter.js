const countryRouter = require( 'express' ).Router()
const { getAllCountriesHandler, getCountryByIdHandler } = require( '../handlers' )

countryRouter.get( '/', getAllCountriesHandler )

countryRouter.get( '/:idPais', getCountryByIdHandler )

module.exports = countryRouter 