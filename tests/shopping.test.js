const app = require('../src/index')
const request = require('supertest')

const {
  validateData,
  verifyData,
  validateId,
  dataToUpdate
} = require('../src/api/services/shoppingServices')

const testObject = {
  "id": 2,
  "idUser": 26882552,
  "idProduct": "S97358",
  "date": "23/06/22",
  "quantity": 3
}

const updateObject = {
  "date": '30/06/22',
  "quantity": 26
}

const newObject = {
  "id": 2,
  "idUser": 26882552,
  "idProduct": "S97358",
  "date": '30/06/22',
  "quantity": 26
}

describe('Routes /api/shopping', () => {

  describe('GET /', () => {

    test('Should get status 200 y content-type: json', async () => {
      const response = await request(app)
        .get('/api/shopping')
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/)
    })

    test('Should get and array of objects', async () => {
      const response = await request(app)
        .get('/api/shopping')
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/)
      expect(response.body).toBeInstanceOf(Array)
    })

    describe('GET /:id', () => {

      test('Should get a shopping by id', async () => {
        const response = await request(app)
          .get('/api/shopping/1')
          .set('Accept', 'application/json')
          .expect(200)
          .expect('Content-Type', /json/)
        expect(response.body).toBeInstanceOf(Object)
      })
    })

    describe('GET /products/:id', () => {

      test('Should get a shopping by idProduct', async () => {
        const response = await request(app)
          .get('/api/shopping/products/S97358')
          .set('Accept', 'application/json')
          .expect(200)
          .expect('Content-Type', /json/)
        expect(response.body).toBeInstanceOf(Array)
      })
    })

    describe('GET /users/:id', () => {

      test('Should get a shopping by idUser', async () => {
        const response = await request(app)
          .get('/api/shopping/users/26882554')
          .set('Accept', 'application/json')
          .expect(200)
          .expect('Content-Type', /json/)
        expect(response.body).toBeInstanceOf(Array)
      })
    })
  })

  describe('POST /', () => {

    test('Should add a new shopping', async () => {
      const response = await request(app)
        .post('/api/shopping')
        .send(testObject)
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/)
    })

    test('Should add an object', async () => {
      const response = await request(app)
        .post('/api/shopping')
        .send([
          {
            idUser: 26882554,
            idProduct: 'S97358',
            date: '28/07/22',
            quantity: 2
          }
        ])
        .set('Accept', 'application/json')
        .expect(404)
    })

    test('Should not add an empty object', async () => {
      const response = await request(app)
        .post('/api/shopping')
        .send({})
        .set('Accept', 'application/json')
        .expect(404)
        .expect('Content-Type', /json/)
    })

    test('Should add an object with idUser and idProduct properties', async () => {
      const response = await request(app)
        .post('/api/shopping')
        .send({
          date: '28/07/22',
          quantity: 3
        })
        .set('Accept', 'application/json')
        .expect(404)
    })
  })

  describe('PUT /', () => {

    test('Should update a shopping on database', async () => {
      const response = await request(app)
        .put('/api/shopping')
        .send({
          id: 1,
          idUser: 26882554,
          idProduct: 'S42716',
          date: '14/07/22',
          quantity: 56
        })
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/)
    })

    test('Should insert an object', async () => {
      const response = await request(app)
        .put('/api/shopping')
        .send([{ id: 26882554, name: 'William'}])
        .set('Accept', 'application/json')
        .expect(404)
        .expect('Content-Type', /json/)
    })

    test('Should not update an empty object', async () => {
      const response = await request(app)
        .put('/api/shopping')
        .send({})
        .set('Accept', 'application/json')
        .expect(404)
        .expect('Content-Type', /json/)
    })

    test('Should update an object with id, idUser, idproduct and date properties', async () => {
      const response = await request(app)
        .put('/api/shopping')
        .send({
          "date": '26/07/21',
          "quantity": 21,
        })
        .set('Accept', 'application/json')
        .expect(404)
        .expect('Content-Type', /json/)
    })
  })

  describe('DELETE /deleteUser/:id', () => {

    test('Should get status 404 for an unexisting shopping', async () => {
      const response = await request(app)
        .delete('/api/shopping/deleteUser/413431411313233456565')
        .expect(404)
    })

    test('Should delete a shopping', async () => {
      const response = await request(app)
        .delete('/api/shopping/deleteUser/3')  // add an existing id product
        .set('Accept', 'application/json')
        .expect(404) // change to status 200
    })
  })

  describe('Services', () => {

    describe('Service validateData', () => {
      
      test('Should validate data and return data', () => {
        expect(validateData(testObject)).toMatchObject(testObject)
      })
  
      test('Should not be an empty object and return an error', () => {
        expect(() => validateData({})).toThrow()
      })

      test('If there are not idUser, idProducts and date properties and return an error', () => {
        expect(() => validateData({ id:1212, quantity: 2 })).toThrow()
      })

      test('Should not be an array and return an error', () => {
        expect(() => validateData([])).toThrow()
      })
    })
      
    test('Should verify data and return it', async () => {
      expect(await verifyData(testObject)).toMatchObject(testObject)
    })

    test('Should verify id and return data', async () => {
      expect(await validateId(2)).toMatchObject(testObject)
    })

    test('Should verify id and return data', () => {
      expect(dataToUpdate(testObject, updateObject)).toMatchObject(newObject)
    })
  })
})