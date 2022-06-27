const { Router } = require('express')
const route = Router()
const {
  allUsers,
  findUserById,
  findUserByName,
  addUser,
  updateUser,
  deleteUser
} = require('../controllers/usersControllers')

/*
  Route to get all users on data base
*/
route.get('/', allUsers)

/*
  Route to get an user by id on data base
*/
route.get('/:id', findUserById)

/*
  Route to get all users with an especific name on data base
*/
route.get('/name/:name', findUserByName)

/*
  Route to add a new user on data base
*/
route.post('/', addUser)

/*
  Route to update an user on data base
*/
route.put('/', updateUser)

/*
  Route to delete an user on data base
*/
route.delete('/deleteUser/:id', deleteUser)

module.exports = route
