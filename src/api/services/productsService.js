// Products Controllers
// It creates an object to store all controllers
const productServices = {}

/*
  This function validate it is an array, it includes property id and it has
  5 properties then It formated the properties name of the product for use it in database
*/
productServices.validateProductData = (data) => {
  if (Array.isArray(data) || typeof data === 'string' || typeof data === 'number') throw Error('It is not an object')

  const keys = Object.keys(data)

  if (!(keys.includes('id'))) throw Error('It does not include and id property')

  if (!(keys.includes('name'))) throw Error('It does not include and name property')

  if (!(keys.includes('price'))) throw Error('It does not include and price property')

  if (!(keys.includes('idLocation'))) throw Error('It does not include and idLocation property')

  if (!(keys.includes('idCategory'))) throw Error('It does not include and idCategory property')

  return {
    id: data.id,
    name: data.name,
    price: data.price,
    discount: !data.discount ? 0 : data.discount,
    currency: data.currency || 'USD',
    availability: data.availability || 'In Stock',
    color: !data.color ? '' : data.color,
    idCategory: data.idCategory,
    idLocation: data.idLocation,
    breadcrumbs: !data.breadcrumbs ? '' : data.breadcrumbs,
    description: !data.description ? '' : data.description,
    brand: !data.brand ? '' : data.brand,
    image1: !data.image1 ? '' : data.image1,
    image2: !data.image2 ? '' : data.image2,
    image3: !data.image3 ? '' : data.image3,
    averageRating: !data.averageRating ? 0 : data.averageRating
  }
}

/*
  This function validate the old data and the new data to update a product
*/
productServices.validateProductDataToUpdate = (oldData, newData) => {
  if (Array.isArray(newData)) throw Error('It is not an object')

  if (!(Object.keys(oldData).includes('id'))) throw Error('It does not include and id property')

  return {
    id: oldData.id,
    name: newData.name || oldData.name,
    price: newData.price || oldData.price,
    discount: newData.discount || oldData.discount,
    color: newData.color || oldData.color,
    currency: newData.currency || oldData.currency,
    availability: newData.availability || oldData.availability,
    idCategory: newData.idCategory || oldData.idCategory,
    idLocation: newData.idLocation || oldData.idLocation,
    breadcrumbs: newData.breadcrumbs || oldData.breadcrumbs,
    description: newData.description || oldData.description,
    brand: newData.brand || oldData.brand,
    image1: newData.image1 || oldData.image1,
    image2: newData.image2 || oldData.image2,
    image3: newData.image3 || oldData.image3,
    averageRating: newData.averageRating || oldData.averageRating
  }
}

module.exports = productServices
