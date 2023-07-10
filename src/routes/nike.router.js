const Router = require('express')
const NikeController = require('../controllers/nike.controller')

const NikeRouter = new Router()

NikeRouter.get('/nike', NikeController.getAllProducts)
NikeRouter.get('/nike/:title', NikeController.getOneProduct)

module.exports = NikeRouter
