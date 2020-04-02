const jwt = require('jsonwebtoken');
const config = require('../config');
const Client = require('../models/client');

module.exports.checAuth = (req, res, next) => {
    const tag = 'TOKEN_MIDDLEWARE: ';
    let token = req.get('Authorization');

    if (token.startsWith('Bearer ')) {
        token = token.split(' ')[1];
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

//check if user is verified

module.exports.isVerified = (req, res, next) => {
    const email = req.decode.email;

    Client.findOne({ email: email })
        .then(client => {
            if (client.isVerified) {
                next();
            } else {
                res.status(401).json({
                    isSuccess: false,
                    isVerified: false,
                    message: 'USER_NOT_VERIFIED'
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                isSuccess: false,
                message: 'INTERNAL_ERROR'
            });
        });

}


// Admin Authentication

module.exports.checkAdminAuth = (req, res, next) => {
    const tag = 'TOKEN_MIDDLEWARE: ';
    let token = req.get('Authorization');

    if (token.startsWith('Bearer ')) {
        token = token.split(' ')[1];
    }

    if (token) {

        jwt.verify(token, config.secret, (err, decoded) => {

            if (!err) {
                
                if (decoded.role === config.role.ADMIN_ROLE) {
                    req.decoded = decoded;
                    next();
                } else {
                    res.status(401).json({
                        isSuccess: false,
                        message: 'NOT_AUTHORIZED'
                    });
                }
                    
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