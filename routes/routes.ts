const birdServiceController = require('../controller/birdServiceController')
const invalidRouteController = require('../controller/invalidResponseController')

function routes (app: any) {
    app.post('/', invalidRouteController.invalidRoute)
    app.get('/', invalidRouteController.invalidRoute)
    app.put('/', invalidRouteController.invalidRoute)
    app.delete('/', invalidRouteController.invalidRoute)
    app.post('/bird', birdServiceController.createSingleBird)
    app.get('/bird', invalidRouteController.invalidRoute)
    app.put('/bird', invalidRouteController.invalidRoute)
    app.delete('/bird', invalidRouteController.invalidRoute)
    app.post('/bird/:id', invalidRouteController.invalidRoute)
    app.get('/bird/:id', birdServiceController.getSingleBird)
    app.put('/bird/:id', invalidRouteController.invalidRoute)
    app.delete('/bird/:id', invalidRouteController.invalidRoute)
    app.post('/birds', invalidRouteController.invalidRoute)
    app.get('/birds', birdServiceController.getAllBirds)
    app.put('/birds', invalidRouteController.invalidRoute)
    app.delete('/birds', invalidRouteController.invalidRoute)

}

module.exports = routes