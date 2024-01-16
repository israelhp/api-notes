const userRepository = require('../../core/interfaces/userRepository')
const bcrypt = require('bcrypt')

const createUser = async (username, email, password) => {
  // Hash de la contraseña antes de almacenarla
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Crear nuevo usuario
  const newUser = await userRepository.createUser({
    username,
    email,
    password: hashedPassword
  })

  return newUser
}

const updateUser = async (username, updatedUserData) => {
  // Aquí puedes agregar lógica de validación o cualquier otra lógica de negocio necesaria.
  if (updatedUserData.password) {
    const salt = await bcrypt.genSalt(10)
    updatedUserData.password = await bcrypt.hash(updatedUserData.password, salt)
  }

  // Realizar la actualización en el repositorio
  const updatedUser = await userRepository.updateUser(username, updatedUserData)

  return updatedUser
}

module.exports = { createUser, updateUser }
