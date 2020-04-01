const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports.checAuth = (req, res, next) => {
    const tag = 'TOKEN_MIDDLEWARE: ';
    const token = req.get('Authorization');

    if (token.startsWith('Bearer ')) {
        token = token.split('')[1];
    }

    if (token) {

        jwt.verify(token, config.secret, (err, decoded) => {

            if (!err) {
                req.decoded = decoded;
                next();
            } else {
                console.log(tag + err.message);
                res.status(401).json({
                    message: 'TOKEN_INVALID',
                    isSuccess: false
                });
            }
        });
    } else {
        console.log(tag + ' Token is not supplied');
        res.status(400).json({
            message: 'TOKEN_NOT_SUPPLIED',
            isSuccess: false
        });
    }
}