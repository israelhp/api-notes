// src/utils/validationMiddleware.js
const { validationResult } = require('express-validator')

const validationMiddleware = (validationRules) => {
  return async (req, res, next) => {
    await Promise.all(
      validationRules.map((validationRule) => validationRule.run(req))
    )

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Error de validación',
        errors: errors.array()
      })
    }

    next()
  }
}

module.exports = validationMiddleware
