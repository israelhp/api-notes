// services/loginService.js
const userRepository = require('../../core/repositories/userRepository')
const passwordUtils = require('../../utils/passwordUtils')
const jwtUtils = require('../../utils/jwtUtils')

const login = async (username, password) => {
  // Obtener el usuario por nombre de usuario
  const user = await userRepository.getUserByUsername(username)

  // Verificar la contraseña
  const isPasswordValid = await passwordUtils.comparePasswords(
    password,
    user.password
  )

  if (!isPasswordValid) {
    const error = new Error('Invalid credentials')
    error.code = 110013
    throw error
  }

  // Generar token JWT
  const token = jwtUtils.generateToken({
    username: user.username,
    userId: user._id
  })

  return token
}

module.exports = { login }
