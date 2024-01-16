require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const app = express()
const router = require('./interfaces/api/router')
const connectDB = require('./config/db')

const PORT = process.env.PORT || 3000

// Middleware
app.set('port', PORT)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(helmet())

// Conexión a la base de datos
connectDB()

// Definición de rutas
app.use('/api-notes', router)

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something went wrong!')
})

module.exports = app
