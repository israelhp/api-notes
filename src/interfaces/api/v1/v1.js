const router = require('express').Router()

router.use('/', (request, response) => {
  response.apiSuccess(
    {
      description:
        'Esta API te proporciona acceso a un conjunto de funciones para gestionar eficientemente tus tareas y proyectos. Organiza, supervisa y realiza un seguimiento de tus actividades de manera efectiva. Utiliza los diferentes endpoints para crear, actualizar, eliminar y obtener información sobre tus tareas.',
      version: '1.0',
      documentation: ''
    },
    'api-notes'
  )
})

module.exports = router
