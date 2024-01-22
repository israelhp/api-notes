const router = require('express').Router()
const noteController = require('../../../app/controllers/noteController')
const authenticateToken = require('../../middlewares/authenticateToken')

router.post('/', authenticateToken, noteController.createNote)
router.get('/', noteController.information)

module.exports = router
