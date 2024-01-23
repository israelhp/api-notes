const UserModel = require('../entities/User')

class UserRepository {
  static createUser = async (userData) => {
    return UserModel.create(userData)
  }

  static getUserByUsername = async (username) => {
    const user = await UserModel.findOne({ username })

    if (!user) {
      const error = new Error('User not found')
      error.code = 110012
      throw error
    }

    return user
  }

  static deleteUserByUsername = async (username) => {
    await UserModel.findOneAndDelete({ username })
  }

  static updateUser = async (username, updatedUserData) => {
    const updatedUser = await UserModel.findOneAndUpdate(
      { username },
      { $set: updatedUserData },
      { new: true } // Devuelve el documento actualizado
    )

    if (!updatedUser) {
      const error = new Error('Failed to update user')
      error.code = 110011
      throw error
    }

    return updatedUser
  }
}

module.exports = UserRepository
