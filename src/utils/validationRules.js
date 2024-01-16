// src/utils/validationRules.js
const { body } = require('express-validator')

// Reglas de validación para el registro de usuario
const userValidationRules = [
  body('username').trim().notEmpty().withMessage('Username is required'),
  body('email').trim().isEmail().withMessage('The email is not valid'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('The password must be at least 6 characters')
]

const userUpdateValidationRules = [
  body('email').trim().isEmail().withMessage('The email is not valid'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('The password must be at least 6 characters')
]

module.exports = { userValidationRules, userUpdateValidationRules }
