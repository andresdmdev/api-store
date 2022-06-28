const { Router } = require('express')
const route = Router()

const {
  allShopping,
  findShopping,
  shoppingByProducts,
  shoppingByUsers,
  addShopping,
  updateShopping,
  deleteShopping
} = require('../controllers/shoppingControllers')

/*
  Route to get all shopping on data base
*/
route.get('/', allShopping)

/*
  Route to get a shopping searched by an id on data base
*/
route.get('/:id', findShopping)

/*
  Route to get all shopping searched by idProduct on data base
*/
route.get('/products/:id', shoppingByProducts)

/*
  Route to get all shopping searched by idUser on data base
*/
route.get('/users/:id', shoppingByUsers)

/*
  Route to add a new shopping on data base
*/
route.post('/', addShopping)

/*
  Route to update a shopping on data base
*/
route.put('/', updateShopping)

/*
  Route to delete a shopping on data base
*/
route.delete('/deleteShopping/:id', deleteShopping)

module.exports = route
