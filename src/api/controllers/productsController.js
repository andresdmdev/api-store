const {
  allProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  findProductById,
  searchProductByName,
  productsByLocation,
  productsByCategory
} = require('../models/productsModel')

const {
  formatedProductsArray,
  formatedProductObject,
  validateProductData,
  validateIdProduct
} = require('../services/productsService')

// Products Controllers

const controller = {}

controller.allProducts = async (req, res) => {
  try {
    const { products } = await allProducts()
    res.status(200).json(formatedProductsArray(products)).end()
  } catch (error) {
    res.status(404).send(error)
  }
}

controller.findProductById = async (req, res) => {
  try {
    const id = validateIdProduct(req.params.id)
    const data = await findProductById(id)
    res.status(200).json(formatedProductsArray(data)).end()
  } catch (error) {
    res.status(404).send(error.message)
  }
}

controller.searchProductByName = async (req, res) => {
  try {
    const name = await searchProductByName(req.params.name)
    res.status(200).json(formatedProductsArray(name)).end()
  } catch (error) {
    res.status(404).json(error.message)
  }
}

controller.productsByLocation = async (req, res) => {
  try {
    const data = await productsByLocation(req.params.idLocation)
    res.status(200).json(formatedProductsArray(data)).end()
  } catch (error) {
    res.status(404).json(error.message)
  }
}

controller.productsByCategory = async (req, res) => {
  try {
    const data = await productsByCategory(req.params.idCategory)
    res.status(200).json(formatedProductsArray(data)).end()
  } catch (error) {
    res.status(404).json(error.message)
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

controller.updateProduct = async (req, res) => {
  try {
    const body = validateProductData(req.body)
    const data = await updateProduct(body)
    res.status(200).json(formatedProductObject(data)).end()
  } catch (error) {
    res.status(404).json(error.message)
  }
}

controller.deleteProduct = async (req, res) => {
  try {
    const id = validateIdProduct(req.params.id)
    const data = await deleteProduct(id)
    res.status(200).json(data).end()
  } catch (error) {
    res.status(404).json(error.message)
  }
}

module.exports = controller
