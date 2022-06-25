const { Router } = require('express')
const route = Router()
const {
  allProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  findProductById,
  searchProductByName,
  productsByLocation,
  productsByCategory
} = require('../controllers/productsController')

// Route Get /api/products - To get all products with its controller
route.get('/', allProducts)

// Route Get /api/products/:id - To get a products that match the id with its controller
route.get('/:id', findProductById)

// Route Get /api/products/name - To get all products that match the name with its controller
route.get('/name/:name', searchProductByName)

// Route Get /api/products/orderByLocation/:idLocation
// To get all products that match the idLocation with its controller
route.get('/orderByLocation/:idLocation', productsByLocation)

// Route Get /api/products/orderByCategory/:idCategory
// To get all products that match the idCategory with its controller
route.get('/orderByCategory/:idCategory', productsByCategory)

// Route Post /api/products - To add a new product to database with its controller
route.post('/', addProduct)

// Route Put /api/products - To update a product with its controller
route.put('/', updateProduct)

// Route Delete /api/products/deleteProduct/:id - To delete a product with its controller
route.delete('/deleteProduct/:id', deleteProduct)

module.exports = route
