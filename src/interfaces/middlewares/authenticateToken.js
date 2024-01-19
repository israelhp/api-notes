const jwtUtils = require('../../utils/jwtUtils')
const { httpHandleError } = require('../../utils/httpErrorHandler')

const authenticateToken = (request, response, next) => {
  try {
    const token = request.headers.authorization.split(' ')[1]

    console.log(token)
    if (!token) {
      const error = new Error()
      error.code = 110004
      throw error
    }

    const user = jwtUtils.verifyToken(token)

    if (!user) {
      const error = new Error()
      error.code = 110004
      throw error
    }

    request.user = user
    next()
  } catch (error) {
    console.log(error)
    const handledError = httpHandleError(error)
    return response.status(handledError.statusCode).json({
      success: false,
      message: handledError.message,
      data: {
        name: handledError.name,
        error
      }
    })
  }
}

module.exports = authenticateToken
