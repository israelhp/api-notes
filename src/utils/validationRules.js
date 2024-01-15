// src/utils/validationRules.js
const { body } = require('express-validator')

// Reglas de validación para el registro de usuario
const registrationValidationRules = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('El nombre de usuario es obligatorio'),
  body('email')
    .trim()
    .isEmail()
    .withMessage('El correo electrónico no es válido'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener al menos 6 caracteres')
]

module.exports = { registrationValidationRules }
