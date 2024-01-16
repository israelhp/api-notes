const router = require('express').Router()
const userController = require('../../../app/controllers/userController')
const { StatusCodes } = require('http-status-codes')
const {
  registrationValidationRules
} = require('../../../utils/validationRules')
const validationMiddleware = require('../../middlewares/validationRequest')

router.post(
  '/register',
  validationMiddleware(registrationValidationRules),
  userController.register
)
router.get('/', (_request, response) => {
  response.status(StatusCodes.OK).json({
    success: true,
    message: 'v1/users',
    data: {
      description:
        'Esta ruta proporciona funcionalidades relacionadas con la gestión de usuarios en la aplicación. Permite realizar operaciones como la creación, recuperación, actualización y eliminación de usuarios, así como obtener información detallada sobre un usuario específico.',
      version: '1.0',
      documentation: ''
    }
  })
})

module.exports = router
