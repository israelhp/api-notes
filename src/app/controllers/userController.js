const userServices = require('../services/userServices')
const { httpHandleError } = require('../../utils/httpErrorHandler')
const { StatusCodes } = require('http-status-codes')

const register = async (request, response) => {
  try {
    const { username, email, password } = request.body
    const newUser = await userServices.createUser(username, email, password)

    return response.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Successfully registered user',
      data: { user: newUser }
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

module.exports = { register }
