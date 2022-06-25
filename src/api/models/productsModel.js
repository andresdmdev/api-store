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
  const promisePool = pool.promise()

  const [products] = await promisePool.query('SELECT * FROM productsAdidas')
  return { products }
}

/*
  The property findProductById is an async/await function.
  It uses the pool and create an instance of promise
  Then It does the sql statement by id and It returns an
  array with the product of the database
*/
models.findProductById = async (id) => {
  const promisePool = pool.promise()

  const [product] = await promisePool.query(`SELECT * FROM productsAdidas WHERE id='${id}'`)
  return product
}

/*
  The property searchProductByName is an async/await function.
  It uses the pool and create an instance of promise
  Then It does the sql statement by name and It returns an
  array with the product of the database
*/
models.searchProductByName = async (name) => {
  const promisePool = pool.promise()

  const [products] = await promisePool.query(`SELECT * FROM productsAdidas WHERE name LIKE '%${name}%'`)
  return products
}

/*
  The property productsByLocation is an async/await function.
  It uses the pool and create an instance of promise
  Then It does the sql statement by idLocation and It returns an
  array with all products of the database
*/
models.productsByLocation = async (idLocation) => {
  const promisePool = pool.promise()

  const [products] = await promisePool.query(`SELECT * FROM productsAdidas WHERE idLocation='${idLocation}'`)
  return products
}

/*
  The property productsByCategory is an async/await function.
  It uses the pool and create an instance of promise
  Then It does the sql statement by idCategory and It returns an
  array with all products of the database
*/
models.productsByCategory = async (idCategory) => {
  const promisePool = pool.promise()

  const [products] = await promisePool.query(`SELECT * FROM productsAdidas WHERE idCategory='${idCategory}'`)
  return products
}

/*
  The property addProduct is an async/await function.
  It calls allProducts function to validate if an product
  exist on the database.It uses the pool and create an instance
  of promise Then It does the sql statement, It adds the product
  to the database and return it
*/
models.addProduct = async (product) => {
  const { products } = await models.allProducts()
  const findProduct = products.find(elem => elem.id === product.id)

  if (findProduct !== undefined) {
    throw Error('Ya se ha ingresado un producto con ese id, por favor introduce otro')
  } else {
    const promisePool = pool.promise()

    await promisePool
      .query(`INSERT INTO productsAdidas 
      (id, name, sellingPrice, discount, color, idCategory, idLocation, 
        breadcrumbs, description, brand, image1, image2, image3, averageRating) 
      VALUES ('${product.id}','${product.name}','${product.sellingPrice}','${product.discount}','${product.color}','${product.idCategory}',
      '${product.idLocation}','${product.breadcrumbs}','${product.description}','${product.brand}','${product.image1}',
      '${product.image2}','${product.image3}','${product.averageRating}')`)

    return product
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
  const { products } = await models.allProducts()
  const findProduct = products.find(elem => elem.id === product.id)

  if (!findProduct) {
    throw Error('No-valid-id - No se ha registrado un producto con ese id, por favor introduce otro')
  } else {
    const promisePool = pool.promise()

    await promisePool
      .query(`UPDATE productsAdidas SET name='${product.name}', sellingPrice='${product.sellingPrice}', 
        discount='${product.discount}', color='${product.color}', idCategory='${product.idCategory}', 
        idLocation='${product.idLocation}', breadcrumbs='${product.breadcrumbs}', description='${product.description}',
        brand='${product.brand}', image1='${product.image1}', image2='${product.image2}',
        image3='${product.image3}', averageRating='${product.averageRating}' WHERE id='${product.id}'
      `)

    return product
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
  const { products } = await models.allProducts()
  const findProduct = products.find(elem => elem.id === idProduct)

  if (!findProduct) {
    throw Error('No existe un producto asociado con el id, verificar id')
  } else {
    const promisePool = pool.promise()

    await promisePool.query(`DELETE FROM productsAdidas WHERE id='${idProduct}'`)

    return { message: 'Producto eliminado exitosamente' }
  }
}

module.exports = models
