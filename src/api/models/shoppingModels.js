const pool = require('../../config/database')

const models = {}

/*
 * This model create an promise instance to do an sql query
 * returns all the shopping from shopping table in other case throw an error
 */
models.allShopping = async () => {
  try {
    const promisePool = pool.promise()

    const [shopping] = await promisePool.query('SELECT * FROM shopping')

    return shopping
  } catch (error) {
    throw Error(error)
  }
}

/*
 * This model create an promise instance to do an sql query
 * returns an shopping from shopping table by an id in other case throw an error
 */
models.findShopping = async (id) => {
  try {
    const promisePool = pool.promise()

    const [shopping] = await promisePool.query(`SELECT * FROM shopping WHERE id='${id}'`)

    return shopping
  } catch (error) {
    throw Error(error)
  }
}

/*
 * This model create an promise instance to do an sql query
 * returns all shopping from shopping table by an idProduct in other case throw an error
 */
models.shoppingByProducts = async (id) => {
  try {
    const promisePool = pool.promise()

    const [shopping] = await promisePool.query(`SELECT * FROM shopping WHERE idProduct LIKE '%${id}%'`)

    return shopping
  } catch (error) {
    throw Error(error)
  }
}

/*
 * This model create an promise instance to do an sql query
 * returns all shopping from shopping table by an idUser in other case throw an error
 */
models.shoppingByUsers = async (id) => {
  try {
    const promisePool = pool.promise()

    const [shopping] = await promisePool.query(`SELECT * FROM shopping WHERE idUser LIKE '%${id}%'`)

    return shopping
  } catch (error) {
    throw Error(error)
  }
}

/*
 * This model create an promise instance to do an sql query
 * returns an shopping created on shopping table by shopping data send in other case throw an error
 */
models.addShopping = async (data) => {
  try {
    const promisePool = pool.promise()

    await promisePool.query(`INSERT INTO shopping (idUser, idProduct, date, 
      quantity) VALUES ('${data.idUser}','${data.idProduct}','${data.date}','${data.quantity}')`)

    return data
  } catch (error) {
    throw Error(error)
  }
}

/*
 * This model create an promise instance to do an sql query
 * returns an shopping updated on shopping table by shopping data send in other case throw an error
 */
models.updateShopping = async (data) => {
  try {
    const promisePool = pool.promise()

    await promisePool
      .query(`UPDATE shopping SET idUser='${data.idUser}', idProduct='${data.idProduct}', 
      date='${data.date}', quantity='${data.quantity}' WHERE id='${data.id}'`)

    return data
  } catch (error) {
    throw Error(error)
  }
}

/*
 * This model create an promise instance to do an sql query
 * It deletes an shopping from shopping table on database by an id
 * returns an object message in other case throw an error
 */
models.deleteShopping = async (id) => {
  try {
    const promisePool = pool.promise()

    await promisePool.query(`DELETE FROM shopping WHERE id='${id}'`)

    return { Success: 'Shopping eliminado' }
  } catch (error) {
    throw Error(error)
  }
}

module.exports = models
