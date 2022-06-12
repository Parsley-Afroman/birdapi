const JsonResponseService = require('../services/jsonResponseService')
import { Request, Response } from 'express';

const invalidRoute = async(request : Request, response : Response) => {
    response.json(JsonResponseService())
}

module.exports.invalidRoute = invalidRoute