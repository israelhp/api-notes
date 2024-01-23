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

  static getNoteById = async (userId, noteId) => {
    const note = await Note.findOne({ _id: noteId, userId })

    if (!note) {
      const notFoundError = new Error('Note not found')
      notFoundError.code = 110012
      throw notFoundError
    }

    return note
  }

  static updateNote = async (userId, noteId, updatedFields) => {
    const note = await Note.findOneAndUpdate(
      { _id: noteId, userId },
      { $set: updatedFields },
      { new: true }
    )
    if (!note) {
      const notFoundError = new Error('Note not found')
      notFoundError.code = 110012
      throw notFoundError
    }
    return note
  }
}

module.exports = NoteRepository
