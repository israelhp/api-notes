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

    if (!user) {
      return response.status(404).json({
        success: false,
        message: 'Usuario no encontrado'
      })
    }

    return response.json({
      success: true,
      message: 'Usuario encontrado exitosamente',
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

module.exports = { register, updateUser, deleteUser, getUserByUsername }
