const activityRouter = require( 'express').Router()
const { getAllActivitiesHandler, createActivityHandler } = require( '../handlers' )

// Gets all the activities of the DB
activityRouter.get( '/', getAllActivitiesHandler )

// Create a new Activity in the DB with the parameters entered by BODY
activityRouter.post( '/', createActivityHandler )

module.exports = activityRouter 