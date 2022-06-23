if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}
const morgan = require('morgan')
const morgan2 = morgan('dev')

const cors = require('cors')

module.exports = { morgan2, cors }
