const errorCodes = {
  DUPLICATE_EMAIL: {
    code: 11000,
    name: 'DUPLICATE_EMAIL',
    statusCode: 400,
    message: 'El correo electrónico ya está registrado'
  },
  INTERNAL_SERVER_ERROR: {
    code: 500,
    name: 'INTERNAL_SERVER_ERROR',
    statusCode: 500,
    message: 'Error interno en el servidor'
  }
  // Agrega más códigos de error según sea necesario
}

module.exports = errorCodes
