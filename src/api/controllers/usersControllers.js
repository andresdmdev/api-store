const {
  allUsers,
  findUserById,
  findUserByName,
  addUser,
  updateUser,
  deleteUser
} = require('../models/usersModels')

const {
  validateUserBody,
  validateUserBodyToUpdate
} = require('../services/usersServices')

const controllers = {}

/*
* This controller call allUsers from models that return an array with all users
* and then send a response with tha data and status 200 in other case status 404
*/
controllers.allUsers = async (req, res) => {
  try {
    const data = await allUsers()
    res.status(200).json(data).end()
  } catch (error) {
    res.status(404).send(error)
  }
}

/*
* This controller call findUserById from models with an id from params that return an object with
* the user and then send a response with tha data and status 200 in other case status 404
*/
controllers.findUserById = async (req, res) => {
  try {
    const data = await findUserById(req.params.id)

    if (!data || data.length === 0) throw Error('Id no existe en la base de datos')

    res.status(200).json(data).end()
  } catch (error) {
    res.status(404).json(error.message)
  }
}

/*
* This controller call findUserByName from models with an name from params that return an array with
* the user and then send a response with tha data and status 200 in other case status 404
*/
controllers.findUserByName = async (req, res) => {
  try {
    const data = await findUserByName(req.params.name)

    if (!data || data.length === 0) throw Error('Nombre no existe en la base de datos')

    res.status(200).json(data).end()
  } catch (error) {
    res.status(404).json(error.message)
  }
}

/*
* This controller verified if a user already exist with findUserById and then it calls
* validateUserBody from services to validate data and prepare it then It calls addUser
* from models that return an object with the user data and status 200
* in other case status 404
*/
controllers.addUser = async (req, res) => {
  try {
    const [findUser] = await findUserById(req.body.id)

    if (findUser) throw Error('Id no es valido o ya existe un usuario con ese id')

    const body = validateUserBody(req.body)
    const data = await addUser(body)
    res.status(200).json(data).end()
  } catch (error) {
    res.status(404).json(error.message)
  }
}

/*
* This controller verified if a user already exist with findUserById and then it calls
* validateUserBodyToUpdate from services to validate old and new data and prepare it
* then It calls updateUser from models that return an object with the user data updated
* and status 200 in other case status 404
*/
controllers.updateUser = async (req, res) => {
  try {
    const [findUser] = await findUserById(req.body.id)

    if (!findUser) throw Error('Id no existe en base de datos')

    const body = validateUserBodyToUpdate(findUser, req.body)
    const data = await updateUser(body)
    res.status(200).json(data).end()
  } catch (error) {
    res.status(404).json(error.message)
  }
}

/*
* This controller verified if a user already exist with findUserById and then it calls
* deleteUser from models that return a message that says 'Usuario eliminado'
* and status 200 in other case status 404
*/
controllers.deleteUser = async (req, res) => {
  try {
    const [findUser] = await findUserById(req.params.id)

    if (!findUser.id) throw Error('Id no existe en base de datos')

    const data = await deleteUser(findUser.id)
    res.status(200).json(data).end()
  } catch (error) {
    res.status(404).json(error.message)
  }
}

module.exports = controllers
