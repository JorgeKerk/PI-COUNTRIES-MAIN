const activityRouter = require( 'express').Router()
const { getAllActivitiesHandler, createActivityHandler } = require( '../handlers' )

activityRouter.get( '/', getAllActivitiesHandler )

activityRouter.post( '/', createActivityHandler )

module.exports = activityRouter 