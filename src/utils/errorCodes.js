const { StatusCodes } = require('http-status-codes')
const errorCodes = {
  DUPLICATE_EMAIL: {
    code: 11000,
    name: 'DUPLICATE_ENTRY',
    statusCode: StatusCodes.BAD_REQUEST,
    message:
      'The operation could not be completed because a record with the same information already exists.'
  },
  USER_UPDATE_FAILED: {
    code: 110011,
    name: 'USER_UPDATE_FAILED',
    statusCode: StatusCodes.NOT_FOUND,
    message:
      'The user you are trying to update was not found. Check the user ID and make sure it exists on the system.'
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
