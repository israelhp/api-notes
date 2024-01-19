// controllers/loginController.js
const authServcies = require('../services/authServices')
const { StatusCodes } = require('http-status-codes')
const { httpHandleError } = require('../../utils/httpErrorHandler')

const login = async (request, response) => {
  try {
    const { username, password } = request.body
    const token = await authServcies.login(username, password)

    return response.status(StatusCodes.OK).json({
      success: true,
      message: 'Successful login',
      data: { token }
    })
  } catch (error) {
    const handledError = httpHandleError(error)
    return response.status(handledError.statusCode).json({
      success: false,
      message: handledError.message,
      data: {
        name: handledError.name
      }
    })
  }
}

const information = async (_request, response) => {
  response.status(StatusCodes.OK).json({
    success: true,
    message: 'v1/auth',
    data: {
      description: 'The endpoint has authentication functionality.',
      version: '1.0',
      documentation: ''
    }
  })
}

module.exports = { login, information }
