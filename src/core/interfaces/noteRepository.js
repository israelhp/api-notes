const Note = require('../entities/Note')

class NoteRepository {
  static createNote = async (noteData) => {
    const newNote = await Note.create(noteData)
    return newNote
  }

  static getNotesByUser = async (userId) => {
    const notes = await Note.find({ userId })
    return notes
  }
}

module.exports = NoteRepository
