const userRepository = require('../../core/interfaces/userRepository')
const { encryptPassword } = require('../../utils/encryptPassword')

const createUser = async (username, email, password) => {
  const hashedPassword = await encryptPassword(password)

  // Crear nuevo usuario
  const newUser = await userRepository.createUser({
    username,
    email,
    password: hashedPassword
  })

  return newUser
}

const updateUser = async (username, updatedUserData) => {
  if (updatedUserData.password) {
    updatedUserData.password = await encryptPassword(updatedUserData.password)
  }

  // Realizar la actualización en el repositorio
  const updatedUser = await userRepository.updateUser(username, updatedUserData)

  return updatedUser
}

const deleteUser = async (username) => {
  // Puedes realizar cualquier lógica adicional aquí, antes de borrar el usuario
  await userRepository.deleteUserByUsername(username)
}

const getUserByUsername = async (username) => {
  const user = await userRepository.getUserByUsername(username)

  const sanitizedUser = {
    username: user.username,
    email: user.email
  }

  return sanitizedUser
}

module.exports = { createUser, updateUser, deleteUser, getUserByUsername }
