const {
  allShopping,
  findShopping,
  shoppingByProducts,
  shoppingByUsers,
  addShopping,
  updateShopping,
  deleteShopping
} = require('../models/shoppingModels')

const {
  validateId,
  verifyData,
  dataToUpdate
} = require('../services/shoppingServices')

const controllers = {}

/*
* This controller calls allShopping from models that return an array with all shopping
* and then send a response with tha data and status 200 in other case status 404
*/
controllers.allShopping = async (req, res) => {
  try {
    const data = await allShopping()

    res.status(200).json(data).end()
  } catch (error) {
    res.status(404).json(error.message)
  }
}

/*
* This controller call findShopping from models with an id from params that return an object with
* the shopping and then send a response with tha data and status 200 in other case status 404
*/
controllers.findShopping = async (req, res) => {
  try {
    const data = await findShopping(req.params.id)

    if (!data || data.length === 0) throw Error('Id no existe en la base de datos')

    res.status(200).json(data).end()
  } catch (error) {
    res.status(404).json(error.message)
  }
}

/*
* This controller call shoppingByProducts from models throught an id from params that
* return an array with all shopping by a product and then send a response
* with tha data and status 200 in other case status 404
*/
controllers.shoppingByProducts = async (req, res) => {
  try {
    const data = await shoppingByProducts(req.params.id)

    if (!data || data.length === 0) throw Error('No existen registros asociados con el id')

    res.status(200).json(data).end()
  } catch (error) {
    res.status(404).json(error.message)
  }
}

/*
* This controller call shoppingByProducts from models throught an id from params that
* return an array with all shopping by an user and then send a response
* with tha data and status 200 in other case status 404
*/
controllers.shoppingByUsers = async (req, res) => {
  try {
    const data = await shoppingByUsers(req.params.id)

    if (!data || data.length === 0) throw Error('No existen registros asociados con el id')

    res.status(200).json(data).end()
  } catch (error) {
    res.status(404).json(error.message)
  }
}

/*
* This controller verified if the idUser and idProduct exist with verifyData and
* then it calls addShopping from models that return an object with the user data and status 200
* in other case status 404
*/
controllers.addShopping = async (req, res) => {
  try {
    const verifiedData = await verifyData(req.body)

    const data = await addShopping(verifiedData)
    res.status(200).json(data).end()
  } catch (error) {
    res.status(404).json(error.message)
  }
}

/*
* This controller:
*   - Validate the id of the shopping to be updated with validateId
*   - Verified if the idUser and idProduct exist with verifyData
*   - It calls dataToUpdate that returns an object to be updated
*   - It calls updateShopping from models to update data and return it
*/
controllers.updateShopping = async (req, res) => {
  try {
    const verifiedDataById = await validateId(req.body.id)
    const verifiedData = await verifyData(req.body)

    const dataToBeUpdated = dataToUpdate(verifiedDataById, verifiedData)

    const data = await updateShopping(dataToBeUpdated)
    res.status(200).json(data).end()
  } catch (error) {
    res.status(404).json(error.message)
  }
}

/*
* This controller verified if a shopping already exist with validateId and then it calls
* deleteUser from models that return a message that says 'Shopping eliminado' and status 200
* in other case status 404
*/
controllers.deleteShopping = async (req, res) => {
  try {
    const [validateIdShopping] = await validateId(req.params.id)

    const data = await deleteShopping(validateIdShopping.id)
    res.status(200).json(data).end()
  } catch (error) {
    res.status(404).json(error.message)
  }
}

module.exports = controllers
