// utils/jwtUtils.js
require('dotenv').config()
const jwt = require('jsonwebtoken')

const generateToken = (payload, secret = process.env.JWT_KEY, options) => {
  return jwt.sign(payload, secret, options)
}

const verifyToken = (token, secret = process.env.JWT_KEY) => {
  return jwt.verify(token, secret)
}

module.exports = { generateToken, verifyToken }
