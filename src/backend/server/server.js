const express = require('express')
const { Pool } = require('pg')
const cors = require('cors')
const dotenv = require('dotenv')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Kaisoccer11;',
  port: process.env.PGPORT,
})

app.use(express.json())
app.use(cors())

app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM player')
    res.json(result.rows)
    console.log(result)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
