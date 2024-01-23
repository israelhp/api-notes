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

const updateUser = async (request, response) => {
  try {
    const { username } = request.params
    const updatedUserData = request.body

    const updatedUser = await userServices.updateUser(username, updatedUserData)

    return response.json({
      success: true,
      message: 'User updated successfully',
      data: { user: updatedUser }
    })
  } catch (error) {
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

const deleteUser = async (request, response) => {
  try {
    const { username } = request.params
    await userServices.deleteUser(username)

    return response.status(StatusCodes.NO_CONTENT).send()
  } catch (error) {
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

const getUserByUsername = async (request, response) => {
  try {
    const { username } = request.params
    const user = await userServices.getUserByUsername(username)

    return response.json({
      success: true,
      message: 'User found successfully',
      data: { user }
    })
  } catch (error) {
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

const information = async (_request, response) => {
  response.status(StatusCodes.OK).json({
    success: true,
    message: 'v1/users',
    data: {
      description:
        'This enpoint provides functionality related to user management in the application. It allows you to perform operations such as creating, recovering, updating and deleting users, as well as obtaining detailed information about a specific user.',
      version: '1.0',
      documentation: ''
    }
  })
}

module.exports = {
  register,
  updateUser,
  deleteUser,
  getUserByUsername,
  information
}
