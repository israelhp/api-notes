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
