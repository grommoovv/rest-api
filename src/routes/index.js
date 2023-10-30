const Router = require('express')
const AshleyController = require('../controllers/ashley.controller')
const NikeController = require('../controllers/nike.controller')

const AshleyRouter = new Router()

AshleyRouter.get('/ashley', AshleyController.getAllProducts)
AshleyRouter.get('/ashley/:id', AshleyController.getOneProduct)

const NikeRouter = new Router()

NikeRouter.get('/nike', NikeController.getAllProducts)
NikeRouter.get('/nike/:title', NikeController.getOneProduct)

module.exports = AshleyRouter
module.exports = NikeRouter
