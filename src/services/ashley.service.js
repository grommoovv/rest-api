const AshleySchema = require('../models/ashley.model')

class AshleyService {
  async getAllProducts() {
    const products = await AshleySchema.find()
    return products
  }

  async getOneProduct(id) {
    const product = await AshleySchema.findOne({ id: `${id}` })
    return product
  }
}

module.exports = new AshleyService()
