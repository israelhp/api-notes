const { StatusCodes } = require('http-status-codes')
const errorCodes = {
  DUPLICATE_EMAIL: {
    code: 11000,
    name: 'DUPLICATE_EMAIL',
    statusCode: StatusCodes.BAD_REQUEST,
    message: 'The email or user is already registered'
  },
  INTERNAL_SERVER_ERROR: {
    code: 500,
    name: 'INTERNAL_SERVER_ERROR',
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    message: 'Internal server error'
  }
  // Agrega más códigos de error según sea necesario
}

module.exports = errorCodes
