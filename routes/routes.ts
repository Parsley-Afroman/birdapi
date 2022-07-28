const birdServiceController = require('../controller/birdServiceController')
const invalidRouteController = require('../controller/invalidResponseController')

function routes (app: any) {
    app.post('/', invalidRouteController.invalidRoute)
    app.get('/', invalidRouteController.invalidRoute)
    app.put('/', invalidRouteController.invalidRoute)
    app.delete('/', invalidRouteController.invalidRoute)

    app.post('/birds', birdServiceController.createSingleBird)
    app.get('/birds/:id', birdServiceController.getSingleBird)
    app.get('/birds', birdServiceController.getAllBirds)

    app.post('/birds/:id', invalidRouteController.invalidRoute)
    app.put('/birds/:id', invalidRouteController.invalidRoute)
    app.delete('/birds/:id', invalidRouteController.invalidRoute)
}

module.exports = routes