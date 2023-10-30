const AshleyService = require('../services')
const NikeService = require('../services/nike.service')

class AshleyController {
  async getProducts(req, res, next) {
    try {
      const products = await AshleyService.getProducts()
      return res.json(products)
    } catch (error) {
      next(error)
    }
  }

  async getProduct(req, res, next) {
    try {
      const product = await AshleyService.getProduct(req.params.id)
      return res.json(product)
    } catch (error) {
      next(error)
    }
  }
}

class NikeController {
  async getProducts(req, res, next) {
    try {
      const products = await NikeService.getProducts()
      return res.json(products)
    } catch (error) {
      next(error)
    }
  }

  async getProduct(req, res, next) {
    try {
      const product = await NikeService.getProduct(req.params.title)
      return res.json(product)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new NikeController()
module.exports = new AshleyController()
