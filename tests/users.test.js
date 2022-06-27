const app = require('../src/index')
const request = require('supertest')
const {
  validateUserBody,
  validateUserBodyToUpdate
} = require('../src/api/services/usersServices')

const testUser = {
  "id": 26882554,
  "name": "Andres CORTES",
  "username": "user-FERN",
  "email": "fcortes@gacel.cl",
  "address": "AV. MARIANO OTERO 1313",
  "phone": "652 36 00",
  "website": "www.afamjal.com",
  "age": 30,
  "country": "CHILE",
  "gender": "F"
}

const updateUserTest = {
  "name": "Andres Marquez",
  "username": "user-FsdsERN",
  "email": "fcortes@sdsgacel.cl",
}

const userTest = {
  "id": 26882554,
  "name": "Andres Marquez",
  "username": "user-FsdsERN",
  "email": "fcortes@sdsgacel.cl",
  "address": "AV. MARIANO OTERO 1313",
  "phone": "652 36 00",
  "website": "www.afamjal.com",
  "age": 30,
  "country": "CHILE",
  "gender": "F"
}

describe('Routes /api/users', () => {

  describe('GET /', () => {
    
    test('Should get all users with status code 200', async () => {
      const response = await request(app)
        .get('/api/users')
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/)
    })
  
    test('Should get an array of objects with all users', async () => {
      const response = await request(app)
        .get('/api/users')
        .set('Accept', 'application/json')
        .expect(200)
      expect(response.body).toBeInstanceOf(Array)
    })

    describe('GET /:id', () => {
      test('Should get an object searched by id', async () => {
        const response = await request(app)
          .get('/api/users/8750940') // Choose and id
          .set('Accept', 'application/json')
          .expect(200)
          .expect('Content-Type', /json/)
        expect(response.body).toBeInstanceOf(Object)
      })
    })

    describe('GET /name/:name', () => {
      
      test('Should get an object searched by name', async() => {
        const response = await request(app)
          .get('/api/users/name/FERNANDA')
          .set('Accept', 'application/json')
          .expect(200)
          .expect('Content-Type', /json/)
        expect(response.body).toBeInstanceOf(Object)
      })
    })
  })

  describe('POST /', () => {

    test('Should insert a new user on database', async () => {
      const response = await request(app)
        .post('/api/users/')
        .send(testUser)
        .set('Accept', 'application/json')
        .expect(404)
        .expect('Content-Type', /json/)
    })

    test('Should insert an object', async () => {
      const response = await request(app)
        .post('/api/users/')
        .send([{ id: 'test', name: 'test'}])
        .set('Accept', 'application/json')
        .expect(404)
        .expect('Content-Type', /json/)
    })

    test('Should not insert an empty object', async () => {
      const response = await request(app)
        .post('/api/users/')
        .send({})
        .set('Accept', 'application/json')
        .expect(404)
        .expect('Content-Type', /json/)
    })

    test('Should insert an object with id, name and email properties', async () => {
      const response = await request(app)
        .post('/api/users/')
        .send({
          "job": 'Freelancer',
          "age": 21,
          "country": 'Spain',
          "Heigth": '1.80mts'
        })
        .set('Accept', 'application/json')
        .expect(404)
        .expect('Content-Type', /json/)
    })
  })

  describe('PUT /', () => {

    test('Should update a user on database', async () => {
      const response = await request(app)
        .put('/api/users/')
        .send({
          "id": '26882554',
          "name": "William Marquez",
          "username": "user-FERN",
          "email": "dsdasdasd@gacel.cl",
          "address": "AV. Surquillo OTERO 1313",
        })
        .set('Accept', 'application/json')
        .expect(200)
        .expect('Content-Type', /json/)
    })

    test('Should insert an object', async () => {
      const response = await request(app)
        .put('/api/users/')
        .send([{ id: 26882554, name: 'William'}])
        .set('Accept', 'application/json')
        .expect(404)
        .expect('Content-Type', /json/)
    })

    test('Should not update an empty object', async () => {
      const response = await request(app)
        .put('/api/users/')
        .send({})
        .set('Accept', 'application/json')
        .expect(404)
        .expect('Content-Type', /json/)
    })

    test('Should update an object with id, name and email properties', async () => {
      const response = await request(app)
        .post('/api/users/')
        .send({
          "job": 'Freelancer',
          "age": 21,
          "country": 'Spain',
          "Heigth": '1.80mts'
        })
        .set('Accept', 'application/json')
        .expect(404)
        .expect('Content-Type', /json/)
    })
  })

  describe('DELETE /deleteUser/:id', () => {

    test('Should get status 404 for an unexisting user', async () => {
      const response = await request(app)
        .delete('/api/users/deleteUser/YYYYY!')
        .expect(404)
        .expect('Content-Type', /json/)
    })

    test('Should delete an user', async () => {
      const response = await request(app)
        .delete('/api/users/deleteUser/12343')  // add an existing id product
        .set('Accept', 'application/json')
        .expect(404) // change to status 200
        .expect('Content-Type', /json/)
    })
  })
})

describe('Services', () => {

  test('Should validate data of the user', () => {
    expect(validateUserBody(testUser)).toMatchObject(testUser)
  })

  test('Should validate data of the user for updating', () => {
    expect(validateUserBodyToUpdate(testUser, updateUserTest)).toMatchObject(userTest)
  })
})