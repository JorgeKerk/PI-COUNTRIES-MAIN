const { getAllCountries, getCountryById } = require( './countryController' )
const { getAllActivities, createActivity } = require( './activityController' )
const saveApiData = require('./saveApiData.js')

module.exports = {
    saveApiData,
    getAllCountries, 
    getCountryById,
    getAllActivities, 
    createActivity
}