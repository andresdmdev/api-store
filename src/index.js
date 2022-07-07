if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}
const morgan = require('morgan')
const cors = require('cors')

const express = require('express')
const app = express()
const path = require('path')

// Swagger docs
const swaggerUI = require('swagger-ui-express')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerSpec = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Node Rest Api - Adidas',
      version: '1.0.0'
    },
    servers: [
      {
        url: 'http://localhost:5000'
      }
    ]
  },
  apis: [`${path.join(__dirname, './api/routes/*.js')}`]
}

app.set('port', process.env.PORT || 3000)

// Middlewares Cors y Morgan
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJSDoc(swaggerSpec)))

// Product Routes
app.use('/api/products', require('./api/routes/productsRoutes'))

// Users Routes
app.use('/api/users', require('./api/routes/usersRoutes'))

// Shopping Routes
app.use('/api/shopping', require('./api/routes/shoppingRoutes'))

// Error 404
app.use((req, res) => {
  res.status(404).send('Error: Not found or page doesn\'t exist')
})

app.listen(app.get('port'), () => {
  console.log('Server on port ' + app.get('port'))
})

module.exports = app
