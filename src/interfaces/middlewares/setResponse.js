const setResponse = (req, res, next) => {
  res.apiSuccess = (data, message = 'Application completed successfully') => {
    res.json({
      success: true,
      message,
      data
    })
  }

  res.apiError = (message = 'Request error', status = 500) => {
    res.status(status).json({
      success: false,
      message,
      data: null
    })
  }

  next()
}

module.exports = setResponse
