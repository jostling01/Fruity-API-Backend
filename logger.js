const logger = (req, res, next) => {
    console.log(req.method, req.originalUrl)
    next()
}
module.exports = logger // remember this for debug