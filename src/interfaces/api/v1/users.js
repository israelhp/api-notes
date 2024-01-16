const router = require('express').Router()
const userController = require('../../../app/controllers/userController')
const { StatusCodes } = require('http-status-codes')
const {
  userValidationRules,
  userUpdateValidationRules
} = require('../../../utils/validationRules')
const validationMiddleware = require('../../middlewares/validationRequest')

router.post(
  '/',
  validationMiddleware(userValidationRules),
  userController.register
)
router.put(
  '/:username',
  validationMiddleware(userUpdateValidationRules),
  userController.updateUser
)
router.delete('/:username', userController.deleteUser)
router.get('/:username', userController.getUserByUsername)
router.get('/', (_request, response) => {
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
})

module.exports = router
