const noteRepository = require('../../core/interfaces/noteRepository')

const createNote = async (title, content, userId) => {
  const newNote = await noteRepository.createNote({
    title,
    content,
    userId
  })
  return newNote
}

const getUserNotes = async (userId) => {
  const userNotes = await noteRepository.getNotesByUser(userId)
  return userNotes
}

const getNoteById = async (userId, noteId) => {
  const note = await noteRepository.getNoteById(userId, noteId)
  return note
}

module.exports = { createNote, getUserNotes, getNoteById }
