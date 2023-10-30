const AshleySchema = require('../models/ashley.model')
const NikeSchema = require('../models/nike.model')

class AshleyService {
  async getProducts() {
    const products = await AshleySchema.find()
    return products
  }

  async getProduct(id) {
    const product = await AshleySchema.findOne({ id: `${id}` })
    return product
  }
}

class NikeService {
  async getProducts() {
    const products = await NikeSchema.find()
    return products
  }

  async getProduct(title) {
    const product = await NikeSchema.findOne({ title: `${title}` })
    return product
  }
}

module.exports = new NikeService()
module.exports = new AshleyService()
