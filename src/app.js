require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const app = express()

const PORT = process.env.PORT || 3000

// Middleware
app.set('port', PORT)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(helmet())

// Definición de rutas
app.use('/api-notes', (request, response) => {
  return response.send({ data: 'api-notes' })
})

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something went wrong!')
})

module.exports = app
