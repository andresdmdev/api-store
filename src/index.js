const express = require('express')
const app = express()

// Middlewares Cors y Morgan
app.use(require('./api/middlewares/middlewares').morgan2)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.set('port', process.env.PORT || 3000)

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
