
const services = {}

/*
 *  This service validate the user body data send in the client side and return an object
 *  Validations:
 *    if it is not an array, tha data has to be an object not a string or a number
 *    It needs at least three properties (id, name, email) to continue
 */
services.validateUserBody = (data) => {
  if (Array.isArray(data) || typeof data === 'string' || typeof data === 'number') throw Error('It is not an object')

  const keys = Object.keys(data)

  if (!keys.includes('id') || typeof data.id !== 'number') throw Error('It does not include and id property or it is not a number')

  if (!keys.includes('name')) throw Error('It does not include and name property')

  if (!keys.includes('email')) throw Error('It does not include and email property')

  return {
    id: data.id,
    name: data.name,
    username: data.username || '',
    email: data.email || '',
    address: data.address || '',
    phone: data.phone || '',
    website: data.website || '',
    age: data.age || 0,
    country: data.country || '',
    gender: data.gender || ''
  }
}

/*
 *  This service validate the usar data on database and the user body data send in the
 *  client side and return an object
 *  Validations:
 *    If it is not an array, tha data has to be an object not a string or a number
 *    If some properties of newData is undefined or null it is the same of oldData
 */
services.validateUserBodyToUpdate = (oldData, newData) => {
  if (Array.isArray(newData) || typeof newData === 'string' || typeof newData === 'number') throw Error('It is not an object')

  return {
    id: oldData.id,
    name: newData.name || oldData.name,
    username: newData.username || oldData.username,
    email: newData.email || oldData.email,
    address: newData.address || oldData.address,
    phone: newData.phone || oldData.phone,
    website: newData.website || oldData.website,
    age: newData.age || oldData.age,
    country: newData.country || oldData.country,
    gender: newData.gender || oldData.gender
  }
}

module.exports = services
