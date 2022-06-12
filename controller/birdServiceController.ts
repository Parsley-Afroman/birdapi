const DbService = require ('../services/dbService')
const BirdService = require('../services/birdService')
const JsonResponseService = require('../services/jsonResponseService')
import { Request, Response } from 'express';

const getAllBirds = async(request : Request, response : Response) => {
    const connection = await DbService()
    const birds = await BirdService.getEveryBird(connection)
    let apiResponse = birds.length > 0
                        ? JsonResponseService(birds, true, 'Success', 200)
                        : JsonResponseService()
    response.json(apiResponse)
}

const getSingleBird =async (request : Request, response : Response) => {
    const connection = await DbService()
    const id = request.params.id
    const bird = await BirdService.getOneBird(connection, id)
    let apiResponse = bird.length > 0
                        ? JsonResponseService(bird, true, 'Success', 200)
                        : JsonResponseService()
    response.json(apiResponse)
}

const createSingleBird =async (request : Request, response : Response) => {
    const connection = await DbService()
    const data = request.body
    const createBird = await BirdService.createBird(connection, data)
    let apiResponse = data.name.length > 0
                        ? JsonResponseService('NA', true, 'Success', 200)
                        : JsonResponseService()
    response.json(apiResponse)
}

module.exports.getAllBirds = getAllBirds
module.exports.getSingleBird = getSingleBird
module.exports.createSingleBird = createSingleBird