const router = require('express').Router()
const authController = require('../../../app/controllers/authController')
const validationMiddleware = require('../../middlewares/validationRequest')
const { loginValidationRules } = require('../../../utils/validationRules')

router.post(
  '/login',
  validationMiddleware(loginValidationRules),
  authController.login
)
router.get('/', authController.information)

module.exports = router
