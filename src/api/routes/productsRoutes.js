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

route.get('/', allProducts)

route.get('/:id', findProductById)

route.get('/name/:name', searchProductByName)

route.get('/orderByLocation/:idLocation', productsByLocation)

route.get('/orderByCategory/:idCategory', productsByCategory)

route.post('/', addProduct)

route.put('/', updateProduct)

route.delete('/deleteProduct/:id', deleteProduct)

module.exports = route
