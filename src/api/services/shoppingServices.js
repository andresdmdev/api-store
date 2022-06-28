const {
  findUserById
} = require('../models/usersModels')

const {
  findProductById
} = require('../models/productsModel')

const {
  findShopping
} = require('../models/shoppingModels')

const services = {}

/*
 *  This service validate the data body data send in the client side and return an object
 *  Validations:
 *    if it is not an array, tha data has to be an object not a string or a number
 *    It needs at least three properties (id, name, date) to continue
 */
services.validateData = (data) => {
  if (Array.isArray(data) || typeof data === 'number' || typeof data === 'string') throw Error('No es un objecto')

  if (!data || Object.keys(data).length === 0) throw Error('Objeto vacio')

  if (!Object.keys(data).includes('idUser')) throw Error('El objeto no presenta el id del usuario')

  if (!Object.keys(data).includes('idProduct')) throw Error('El objeto no presenta id del producto')

  if (!Object.keys(data).includes('date')) throw Error('El objeto no presenta fecha del shopping')

  return data
}

/*
 * This service calls validateData to validate body data
 * Verify:
 *  - If the idUser exist on user table
 *  - If the idProduct exist on products table
 * Return the body date in other case return an error
 */
services.verifyData = async (body) => {
  try {
    const data = services.validateData(body)

    const [userData] = await findUserById(data.idUser)
    const [productData] = await findProductById(data.idProduct)

    if (!userData || !userData.id) throw Error('Id de usuario no es valido')

    if (!productData || !productData.id) throw Error('Id de producto no es valido')

    return body
  } catch (error) {
    throw Error(error)
  }
}
/*
 * This service validate and find a shopping by id. It returns a shopping data, in other case an error
 */
services.validateId = async (id) => {
  try {
    if (!id) throw Error('Id no valido o no existe')

    const [findShoppingById] = await findShopping(id)

    if (!findShoppingById || Object.keys(findShoppingById).length === 0) throw Error('Id no valido o no existe id de shopping')

    return findShoppingById
  } catch (error) {
    throw Error(error)
  }
}

/*
 *  This service validate the shopping data on database and the shopping body data send in the
 *  client side and return an object
 */
services.dataToUpdate = (oldData, newData) => {
  return {
    id: oldData.id,
    idUser: newData.idUser || oldData.idUser,
    idProduct: newData.idProduct || oldData.idProduct,
    date: newData.date || oldData.date,
    quantity: newData.quantity || oldData.quantity
  }
}

module.exports = services
