const express = require('express')
const app = express()

// Middlewares
app.use(require('./api/middlewares/middlewares').morgan2)
app.use(express.json())

app.set('port', process.env.PORT || 3000)

// Routes
app.use('/api/products', require('./api/routes/productsRoutes')) // Products

app.listen(app.get('port'), () => {
  console.log('Server on port ' + app.get('port'))
})

module.exports = app
