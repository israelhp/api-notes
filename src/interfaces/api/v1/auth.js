const router = require('express').Router()
const authController = require('../../../app/controllers/authController')

router.post('/login', authController.login)
router.get('/', authController.information)

module.exports = router
