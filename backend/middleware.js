const notFound = (req, res, next) => {
    const error = new Error(`Not found ${req.originalUrl}`)
    res.status(404)
    next(error)
}

const errorHandling = (error, req, res, next) => {
    const statusCode = res.status === 200 ? 500 : req.statusCode
    res.status = statusCode
    res.json({
        message: error.message,
    })
}

module.exports = {
    notFound,
    errorHandling
}