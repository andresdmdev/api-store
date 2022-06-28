const pool = require('../../config/database')

const models = {}

/*
 * This model create an promise instance to do an sql query
 * returns all the users from users table in other case throw an error
 */
models.allUsers = async () => {
  try {
    const promisePool = pool.promise()

    const [users] = await promisePool.query('SELECT * FROM users')

    return users
  } catch (error) {
    throw Error(error)
  }
}

/*
 * This model create an promise instance to do an sql query
 * returns an user from users table by an user id in other case throw an error
 */
models.findUserById = async (id) => {
  try {
    const promisePool = pool.promise()

    const [user] = await promisePool.query(`SELECT * FROM users WHERE id='${id}'`)

    return user
  } catch (error) {
    throw Error(error)
  }
}

/*
 * This model create an promise instance to do an sql query
 * returns all users from users table by an user name in other case throw an error
 */
models.findUserByName = async (name) => {
  try {
    const promisePool = pool.promise()

    const [user] = await promisePool.query(`SELECT * FROM users WHERE name LIKE '%${name}%'`)

    return user
  } catch (error) {
    throw Error(error)
  }
}

/*
 * This model create an promise instance to do an sql query
 * returns an user created on users table by user data send in other case throw an error
 */
models.addUser = async (data) => {
  try {
    const promisePool = pool.promise()

    await promisePool.query(`INSERT INTO users (id, name, username, email, address, 
    phone, website, age, country, gender) VALUES ('${data.id}', '${data.name}', '${data.username}', 
    '${data.email}', '${data.address}', '${data.phone}', '${data.website}', '${data.age}', 
    '${data.country}', '${data.gender}')`)

    return data
  } catch (error) {
    throw Error(error)
  }
}

/*
 * This model create an promise instance to do an sql query
 * returns an user updated on users table by user data send in other case throw an error
 */
models.updateUser = async (data) => {
  try {
    const promisePool = pool.promise()

    await promisePool
      .query(`UPDATE users SET name='${data.name}', username='${data.username}', email='${data.email}', address='${data.address}', phone='${data.phone}', website='${data.website}', age='${data.age}', country='${data.country}', gender='${data.gender}' WHERE id='${data.id}'`)

    return data
  } catch (error) {
    throw Error(error)
  }
}

/*
 * This model create an promise instance to do an sql query
 * It deletes an user from users table on database by an user id
 * returns an object message in other case throw an error
 */
models.deleteUser = async (id) => {
  try {
    const promisePool = pool.promise()

    await promisePool.query(`DELETE FROM users WHERE id='${id}'`)

    return { Success: 'Usuario eliminado' }
  } catch (error) {
    throw Error(error)
  }
}

module.exports = models
