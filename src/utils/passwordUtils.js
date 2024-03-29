// En el archivo services/userService.js

const bcrypt = require('bcrypt')

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  return hashedPassword
}

const comparePasswords = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword)
}

module.exports = { encryptPassword, comparePasswords }
