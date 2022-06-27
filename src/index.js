const express = require('express')
const app = express()

// Middlewares Cors y Morgan
app.use(require('./api/middlewares/middlewares').morgan2)
app.use(express.json())

app.set('port', process.env.PORT || 3000)

// Product Routes
app.use('/api/products', require('./api/routes/productsRoutes'))

// Users Routes
app.use('/api/users', require('./api/routes/usersRoutes'))

app.listen(app.get('port'), () => {
  console.log('Server on port ' + app.get('port'))
})

module.exports = app
