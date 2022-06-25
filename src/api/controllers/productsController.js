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
// It creates an object to store all controllers
const controller = {}

/*
  The property allProducts is an async/await function.
  It calls a function that return all products and store it in products
  then It formated the data to show in the response in other case send an error
*/
controller.allProducts = async (req, res) => {
  try {
    const { products } = await allProducts()
    res.status(200).json(formatedProductsArray(products)).end()
  } catch (error) {
    res.status(404).send(error)
  }
}

/*
  The property findProductById is an async/await function.
  It formated the data before and after send to database
  When It calls a function that return the product and store it in data
*/
controller.findProductById = async (req, res) => {
  try {
    const id = validateIdProduct(req.params.id)
    const data = await findProductById(id)
    res.status(200).json(formatedProductsArray(data)).end()
  } catch (error) {
    res.status(404).send(error.message)
  }
}

/*
  The property searchProductByName is an async/await function.
  When It calls a function that return the product and store it in data
  It formated the data after send to database
*/
controller.searchProductByName = async (req, res) => {
  try {
    const name = await searchProductByName(req.params.name)
    res.status(200).json(formatedProductsArray(name)).end()
  } catch (error) {
    res.status(404).json(error.message)
  }
}

/*
  The property productsByLocation is an async/await function.
  It calls a function that return all products by idLocation and store it in data
  then It formated the data to show in the response in other case send an error
*/
controller.productsByLocation = async (req, res) => {
  try {
    const data = await productsByLocation(req.params.idLocation)
    res.status(200).json(formatedProductsArray(data)).end()
  } catch (error) {
    res.status(404).json(error.message)
  }
}

/*
  The property productsByCategory is an async/await function.
  It calls a function that return all products by idCategory and store it in data
  then It formated the data to show in the response in other case send an error
*/
controller.productsByCategory = async (req, res) => {
  try {
    const data = await productsByCategory(req.params.idCategory)
    res.status(200).json(formatedProductsArray(data)).end()
  } catch (error) {
    res.status(404).json(error.message)
  }
}

/*
  The property addProduct is an async/await function.
  It formated the data before and after send to database
  It calls a function that add a product and return it and store it in data
*/
controller.addProduct = async (req, res) => {
  try {
    const body = validateProductData(req.body)
    const data = await addProduct(body)
    res.status(200).json(formatedProductObject(data)).end()
  } catch (error) {
    res.status(404).json(error.message)
  }
}

/*
  The property updateProduct is an async/await function.
  It formated the data before and after send to database
  It calls a function that update a product and return it and store it in data
*/
controller.updateProduct = async (req, res) => {
  try {
    const body = validateProductData(req.body)
    const data = await updateProduct(body)
    res.status(200).json(formatedProductObject(data)).end()
  } catch (error) {
    res.status(404).json(error.message)
  }
}

/*
  The property deleteProduct is an async/await function.
  It formated the data before and after send to database
  It calls a function that delete a product
*/
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
