const NikeSchema = require('../models/nike.model')

class NikeService {
  async getAllProducts() {
    const products = await NikeSchema.find()
    return products
  }

  async getOneProduct(title) {
    const product = await NikeSchema.findOne({ title: `${title}` })
    return product
  }
}

module.exports = new NikeService()
