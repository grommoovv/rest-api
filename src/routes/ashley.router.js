const Router = require('express')
const AshleyController = require('../controllers/ashley.controller')

const AshleyRouter = new Router()

AshleyRouter.get('/ashley', AshleyController.getAllProducts)
AshleyRouter.get('/ashley/:id', AshleyController.getOneProduct)

module.exports = AshleyRouter
