// src/utils/validationMiddleware.js
const { validationResult } = require('express-validator')
const { StatusCodes } = require('http-status-codes')
const validationMiddleware = (validationRules) => {
  return async (req, res, next) => {
    await Promise.all(
      validationRules.map((validationRule) => validationRule.run(req))
    )

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(StatusCodes.OK).json({
        success: false,
        message: 'Validation error',
        data: {
          errors: errors.array()
        }
      })
    }

    next()
  }
}

module.exports = validationMiddleware
