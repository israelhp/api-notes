const router = require('express').Router()
const { StatusCodes } = require('http-status-codes')
const userRouter = require('./users')

router.use('/users', userRouter)
router.use('/', (_request, response) => {
  response.status(StatusCodes.OK).json({
    success: true,
    message: 'v1',
    data: {
      description:
        'Esta API te proporciona acceso a un conjunto de funciones para gestionar eficientemente tus tareas y proyectos. Organiza, supervisa y realiza un seguimiento de tus actividades de manera efectiva. Utiliza los diferentes endpoints para crear, actualizar, eliminar y obtener información sobre tus tareas.',
      version: '1.0',
      documentation: ''
    }
  })
})

module.exports = router
