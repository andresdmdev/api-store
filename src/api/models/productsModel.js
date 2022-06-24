const pool = require('../../config/database')

const models = {}

models.allProducts = async () => {
  const promisePool = pool.promise()

  const [products] = await promisePool.query('SELECT * FROM productsAdidas')
  return { products }
}

models.findProductById = async (id) => {
  const promisePool = pool.promise()

  const [product] = await promisePool.query(`SELECT * FROM productsAdidas WHERE id='${id}'`)
  return product
}

models.searchProductByName = async (name) => {
  const promisePool = pool.promise()

  const [products] = await promisePool.query(`SELECT * FROM productsAdidas WHERE name LIKE '%${name}%'`)
  return products
}

models.productsByLocation = async (idLocation) => {
  const promisePool = pool.promise()

  const [products] = await promisePool.query(`SELECT * FROM productsAdidas WHERE idLocation='${idLocation}'`)
  return products
}

models.productsByCategory = async (idCategory) => {
  const promisePool = pool.promise()

  const [products] = await promisePool.query(`SELECT * FROM productsAdidas WHERE idCategory='${idCategory}'`)
  return products
}

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
