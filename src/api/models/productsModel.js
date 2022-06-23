const pool = require('../../config/database')

const services = {}

services.allProducts = async () => {
  const promisePool = pool.promise()

  const [products] = await promisePool.query('SELECT * FROM productsAdidas')
  return { products }
}

services.addProduct = async (product) => {
  const { products } = await services.allProducts()
  const findProduct = products.find(elem => elem.id === product.id)

  if (findProduct !== undefined) {
    return { 'No-valid-id': 'Ya se ha ingresado un producto con ese id, por favor introduce otro' }
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

module.exports = services
