// /config/db.js
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log(`MongoDB Connected: ${connection.connection.host}`)
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`)
    process.exit(1) // Salir del proceso con un código de error
  }
}

module.exports = connectDB
