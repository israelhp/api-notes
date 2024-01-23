const router = require('express').Router()
const noteController = require('../../../app/controllers/noteController')
const authenticateToken = require('../../middlewares/authenticateToken')

router.post('/', authenticateToken, noteController.createNote)
router.put('/', authenticateToken, noteController.updateNote)
router.delete('/:noteId', authenticateToken, noteController.deleteNote)
router.get('/', authenticateToken, noteController.getNotes)
router.get('/:noteId', authenticateToken, noteController.getNoteById)
router.get('/info', noteController.information)

module.exports = router
