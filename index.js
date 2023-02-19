const express = require('express')

const app = express()

// Middlewares Cors y Morgan
app.use(require('./src/api/middlewares/middlewares').morgan2)
app.use(require('./src/api/middlewares/middlewares').cors())

app.use(express.json())

app.set('port', process.env.PORT || 3000)

// Product Routes
app.use('/api/products', require('./src/api/routes/productsRoutes'))

// Users Routes
app.use('/api/users', require('./src/api/routes/usersRoutes'))

// Shopping Routes
app.use('/api/shopping', require('./src/api/routes/shoppingRoutes'))

app.use('/', (req, res) => {
  res.json({ message: 'Api Adidas' })
})

app.listen(app.get('port'), () => {
  console.log('Server on port ' + app.get('port'))
})

module.exports = app
