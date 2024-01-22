const noteRepository = require('../../core/interfaces/noteRepository')

const createNote = async (title, content, userId) => {
  const newNote = await noteRepository.createNote({
    title,
    content,
    userId
  })
  return newNote
}

module.exports = { createNote }
