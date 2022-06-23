const { allProducts, addProduct } = require('../models/productsModel')
const { formatedProductsArray, formatedProductObject, validateProductData } = require('../services/productsService')

// Controllers of Products

const controller = {}

controller.allProducts = async (req, res) => {
  try {
    const { products } = await allProducts()
    res.status(200).json(formatedProductsArray(products)).end()
  } catch (error) {
    res.status(404).send(error)
  }
}

controller.addProduct = async (req, res) => {
  try {
    const body = validateProductData(req.body)
    const data = await addProduct(body)
    res.status(200).json(formatedProductObject(data)).end()
  } catch (error) {
    res.status(404).json(error.message)
  }
}

module.exports = controller
