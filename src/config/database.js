const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'z1gxzh4cak6r.us-east-3.psdb.cloud',
  user: 'fzhkonv2qfbw',
  database: 'prueba-andres',
  password: 'pscale_pw_iDgEFztISqIaBQsiu8KBPs9FiYmmtuLXzNTXtwUhBH4',
  waitForConnections: true,
  connectionLimit: 100,
  ssl: {
    rejectUnauthorized: false
  }
})

module.exports = pool
