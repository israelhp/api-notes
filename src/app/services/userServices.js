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

module.exports = { createUser }
