const NikeService = require('../services/nike.service')

class NikeController {
  async getAllProducts(req, res, next) {
    try {
      const products = await NikeService.getAllProducts()
      return res.json(products)
    } catch (error) {
      next(error)
    }
  }

  async getOneProduct(req, res, next) {
    try {
      const product = await NikeService.getOneProduct(req.params.title)
      return res.json(product)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new NikeController()
