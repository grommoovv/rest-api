const AshleyService = require('../services/ashley.service')

class AshleyController {
  async getAllProducts(req, res, next) {
    try {
      const products = await AshleyService.getAllProducts()
      return res.json(products)
    } catch (error) {
      next(error)
    }
  }

  async getOneProduct(req, res, next) {
    try {
      const product = await AshleyService.getOneProduct(req.params.id)
      return res.json(product)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new AshleyController()
