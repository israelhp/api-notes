const { StatusCodes } = require('http-status-codes')
const errorCodes = {
  DUPLICATE_EMAIL: {
    code: 11000,
    name: 'DUPLICATE_EMAIL',
    statusCode: StatusCodes.BAD_REQUEST,
    message: 'El correo electrónico ya está registrado'
  },
  INTERNAL_SERVER_ERROR: {
    code: 500,
    name: 'INTERNAL_SERVER_ERROR',
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    message: 'Error interno en el servidor'
  }
  // Agrega más códigos de error según sea necesario
}

module.exports = errorCodes
