const noteServices = require('../services/noteServices')
const { httpHandleError } = require('../../utils/httpErrorHandler')
const { StatusCodes } = require('http-status-codes')

const createNote = async (request, response) => {
  try {
    const { userId } = request.user
    const { title, content } = request.body

    const newNote = await noteServices.createNote(title, content, userId)

    return response.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Successfully registered note',
      data: { note: newNote }
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
    message: 'v1/notes',
    data: {
      description: '',
      version: '1.0',
      documentation: ''
    }
  })
}

module.exports = { information, createNote }
