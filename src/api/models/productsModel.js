const pool = require('../../config/database')

// Products Controllers
// It creates an object to store all controllers
const models = {}

/*
  The property allProducts is an async/await function.
  It uses the pool and create an instance of promise
  Then It does the sql statement and It returns an
  array with all products of the database
*/
models.allProducts = async () => {
  try {
    const promisePool = pool.promise()

    const [products] = await promisePool.query('SELECT * FROM productsAdidas')
    return { products }
  } catch (error) {
    throw Error(error)
  }
}

/*
  The property findProductById is an async/await function.
  It uses the pool and create an instance of promise
  Then It does the sql statement by id and It returns an
  array with the product of the database
*/
models.findProductById = async (id) => {
  try {
    const promisePool = pool.promise()

    const [product] = await promisePool.query(`SELECT * FROM productsAdidas WHERE id='${id}'`)
    return product
  } catch (error) {
    throw Error(error)
  }
}

/*
  The property searchProductByName is an async/await function.
  It uses the pool and create an instance of promise
  Then It does the sql statement by name and It returns an
  array with the product of the database
*/
models.searchProductByName = async (name) => {
  try {
    const promisePool = pool.promise()

    const [products] = await promisePool.query(`SELECT * FROM productsAdidas WHERE name LIKE '%${name}%'`)
    return products
  } catch (error) {
    throw Error(error)
  }
}

/*
  The property productsByLocation is an async/await function.
  It uses the pool and create an instance of promise
  Then It does the sql statement by idLocation and It returns an
  array with all products of the database
*/
models.productsByLocation = async (idLocation) => {
  try {
    const promisePool = pool.promise()

    const [products] = await promisePool.query(`SELECT * FROM productsAdidas WHERE idLocation='${idLocation}'`)
    return products
  } catch (error) {
    throw Error(error)
  }
}

/*
  The property productsByCategory is an async/await function.
  It uses the pool and create an instance of promise
  Then It does the sql statement by idCategory and It returns an
  array with all products of the database
*/
models.productsByCategory = async (idCategory) => {
  try {
    const promisePool = pool.promise()

    const [products] = await promisePool.query(`SELECT * FROM productsAdidas WHERE idCategory='${idCategory}'`)
    return products
  } catch (error) {
    throw Error(error)
  }
}

/*
  The property addProduct is an async/await function.
  It calls allProducts function to validate if an product
  exist on the database.It uses the pool and create an instance
  of promise Then It does the sql statement, It adds the product
  to the database and return it
*/
models.addProduct = async (product) => {
  try {
    const promisePool = pool.promise()

    await promisePool
      .query(`INSERT INTO productsAdidas 
      (id, name, price, discount, currency, availability, color, idCategory, idLocation, 
        breadcrumbs, description, brand, image1, image2, image3, image4, image5, image6, image7, image8, image9, averageRating) 
      VALUES ('${product.id}','${product.name}','${product.price}','${product.discount}',
      '${product.currency}','${product.availability}','${product.color}','${product.idCategory}',
      '${product.idLocation}','${product.breadcrumbs}','${product.description}',
      '${product.brand}','${product.image1}','${product.image2}','${product.image3}', '${product.image4}','${product.image5}','${product.image6}', 
      '${product.image7}','${product.image8}','${product.image9}', '${product.averageRating}')`)

    return product
  } catch (error) {
    throw Error(error)
  }
}

/*
  The property updateProduct is an async/await function.
  It calls allProducts function to validate if an product
  exist on the database.It uses the pool and create an instance
  of promise Then It does the sql statement, It updates the product
  to the database and return it
*/
models.updateProduct = async (product) => {
  try {
    const promisePool = pool.promise()

    await promisePool
      .query(`UPDATE productsAdidas SET name='${product.name}', price='${product.price}', 
        discount='${product.discount}', currency='${product.currency}', availability='${product.availability}', 
        color='${product.color}', idCategory='${product.idCategory}', idLocation='${product.idLocation}', 
        breadcrumbs='${product.breadcrumbs}', description='${product.description}', brand='${product.brand}', 
        image1='${product.image1}', image2='${product.image2}', image3='${product.image3}', 
        averageRating='${product.averageRating}' WHERE id='${product.id}'
      `)

    return product
  } catch (error) {
    throw Error(error)
  }
}

/*
  The property deleteProduct is an async/await function.
  It calls allProducts function to validate if an product
  exist on the database.It uses the pool and create an instance
  of promise Then It does the sql statement, It deletes the product
  to the database and return it
*/
models.deleteProduct = async (idProduct) => {
  try {
    const promisePool = pool.promise()

    await promisePool.query(`DELETE FROM productsAdidas WHERE id='${idProduct}'`)

    return { message: 'Producto eliminado exitosamente' }
  } catch (error) {
    throw Error(error)
  }
}

module.exports = models
