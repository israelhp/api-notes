const router = require('express').Router()
const userRouter = require('./users')
const authRouter = require('./auth')
const noteRouter = require('./notes')
const { StatusCodes } = require('http-status-codes')

router.use('/users', userRouter)
router.use('/auth', authRouter)
router.use('/notes', noteRouter)
router.use('/', (_request, response) => {
  response.status(StatusCodes.OK).json({
    success: true,
    message: 'v1',
    data: {
      description:
        'This API provides you access to a set of functions to efficiently manage your tasks and projects. Organize, monitor and track your activities effectively. Use the different endpoints to create, update, delete and obtain information about your tasks.',
      version: '1.0',
      documentation: ''
    }
  })
})

module.exports = router
