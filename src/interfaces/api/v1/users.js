const router = require('express').Router()
const userController = require('../../../app/controllers/userController')
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
router.get('/', userController.information)

module.exports = router
