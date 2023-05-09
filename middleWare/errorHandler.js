const { constants } = require('../constants')
const errorHandler = (err, req, res, next) => {
    console.log(err, '🙏🙏🙏🙏🙏')
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: 'Validation Falied', message: err.message, stackTrace: err.stack });
            break;
        case constants.NOT_FOUND:
            res.json({ title: 'Not found', message: err.message, stackTrace: err.stack });
            break;
        case constants.FORBIDDEN:
            res.json({ title: 'Fobidden', message: err.message, stackTrace: err.stack })
            break;
        case constants.VALIDATION_ERROR:
            res.json({ title: 'Not validated', message: err.message, stackTrace: err.stack })
        default:
            console.log('No Error all good')
            break;

    }
    const statusCode = res.statusCode ? res.statusCode : 500
    next()
}

module.exports = errorHandler