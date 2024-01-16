const UserModel = require('../entities/User')

class UserRepository {
  static createUser = async (userData) => {
    return UserModel.create(userData)
  }

  static getAllUsers = async () => {
    return UserModel.find()
  }

  static getUserById = async (userId) => {
    return UserModel.findById(userId)
  }

  static updateUserById = async (userId, updatedUserData) => {
    return UserModel.findByIdAndUpdate(userId, updatedUserData, { new: true })
  }

  static deleteUserByUsername = async (username) => {
    const deleteUser = await UserModel.findOneAndDelete({ username })
    console.log(deleteUser)
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

  static deleteUserById = async (userId) => {
    return UserModel.findByIdAndDelete(userId)
  }

  static findUserByEmail = async (email) => {
    return UserModel.findOne({ email })
  }

  static validateLoginCredentials = async (email, password) => {
    return UserModel.findOne({ email, password })
  }
}

module.exports = UserRepository
