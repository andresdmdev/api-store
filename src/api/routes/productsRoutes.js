const { Router } = require('express')
const route = Router()
const { allProducts, addProduct } = require('../controllers/productsController')

route.get('/', allProducts)

route.post('/', addProduct)

module.exports = route
