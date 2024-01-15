const userServices = require('../services/userServices')

const register = async (request, response) => {
  try {
    const { username, email, password } = request.body
    const newUser = await userServices.createUser(username, email, password)

    return response.json({
      success: true,
      message: 'Usuario registrado exitosamente',
      data: { user: newUser }
    })
  } catch (error) {
    console.error(error)
    return response
      .status(500)
      .json({ success: false, message: 'Error en el servidor' })
  }
}

module.exports = { register }
