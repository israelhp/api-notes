const errorCodes = require('./errorCodes')

const httpErrorHandler = (error) => {
  const errorCode = error.code || 500
  const errorDetails =
    Object.values(errorCodes).find((details) => details.code === errorCode) ||
    errorCodes.INTERNAL_SERVER_ERROR
  return {
    name: errorDetails.name,
    code: errorCode,
    statusCode: errorDetails.statusCode,
    message: errorDetails.message
  }
}

module.exports = { httpErrorHandler }
