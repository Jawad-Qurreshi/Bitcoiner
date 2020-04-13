const Client = require('../../models/client');
const BtcAddress = require('../../models/btc-address');
const TradePost = require('../../models/trade-post');
const WithdrawRequest = require('../../models/withdraw-request');
const config = require('../../config');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports.updateUser = (req, res) => {
    const body = req.body;
    const newOps = body.newOps;
    const userId = req.decoded.userId;

    Client.findOne({ _id: userId }).exec()
        .then(client => {
            client.name = newOps.name ? newOps.name : client.name;
            client.password = newOps.password ? newOps.password : client.password;
            client.address = newOps.address ? newOps.address : client.address;
            client.phone = newOps.phone ? newOps.phone : client.phone;
            client.save()
                .then(saved => {
                    res.status(200).json({
                        isUpdated: true
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        isUpdated: false,
                        message: 'INTERNAL_ERROR'
                    });
                });
        })
        .catch(err => {
            res.status(500).json({
                isUpdated: false,
                message: 'INTERNAL_ERROR'
            });
        });
}

module.exports.signUp = async (req, res) => {
    const body = req.body;
    const email = body.email;
    const saltRounds = 10;
    bcrypt.hash(body.password, saltRounds, async (err, hash) => {
        const result = await Client.findOne({ email: email });
        if (!result) {
            let client = new Client({
                username: body.username,
                email: body.email,
                password: hash,
                phone: body.phone,
                address: body.address,
                btcAddress: '',
                ethAddress: ''
            });
            var end = {};
            BtcAddress.find({})
                .exec(function (err, addresses) {
                    if (err) {
                        console.log('Error while retrieving clients');
                    } else {
                        const length = addresses.length;
                        let val = 1;
                        val = Math.floor(Math.random() * (length - 1));
                        end = addresses[val];
                        client.btcAddress = end.btcAddress;
                        client.ethAddress = end.ethAddress;
                        client.save()
                            .then(client => {
                                mailer.sendVerificationMail(client.email);
                                res.json(client);
                            })
                            .catch(err => {
                                res.status(500).json({
                                    isSuccess: false,
                                    message: 'INTERNAL_ERROR'
                                });
                            });
                    }
                });
        }
        else {
            res.status(401).json({
                message: 'USER_ALREADY_EXISTS',
                isSuccess: false
            });
        }
    });
}

module.exports.logIn = async (req, res) => {
    const body = req.body;
    let id;
    let token;
    const email = body.email;
    const result = await Client.findOne({ email: email });
    if (!result) {
        res.status(401).send({
            message: 'CREDS_INVALID',
            isAuthenticated: false
        });
    } else {
        bcrypt.compare(body.password, result.password, (err, isMatched) => {
            if (!err) {
                if (isMatched) {
                    id = result._id;
                    token = jwt.sign({ userid: result._id }, config.secret.USER, { expiresIn: 1000 * 60 * 60, algorithm: 'HS256' });
                    res.status(200).json({
                        id: id,
                        token: token,
                        isAuthenticated: true
                    });
                } else {
                    res.status(401).send({
                        message: 'CREDS_INVALID',
                        isAuthenticated: false,
                        isVerified: result.isVerified
                    });
                }
            } else {
                res.status(401).json({
                    message: err.message,
                    isAuthenticated: false
                });
            }
        });
    }
}

module.exports.getClient = (req, res) => {
    const userid = req.decoded.userid;
    Client.findById(userid)
        .exec(function (err, client) {
            if (err) {
                // console.log('Error while retrieving video');
            } else {
                res.status(200).json(client);
            }
        });
}

// Buy/sell posts

module.exports.getClientPosts = (req, res) => {
    const clientId = req.decoded.userid;

    TradePost.find({ clientId: clientId }).exec()
        .then(posts => {
            res.status(200).json({
                isSuccess: true,
                posts: posts
            });
        })
        .catch(err => {
            res.status(500).json({
                isSuccess: false,
                message: 'INTERNAL_ERROR'
            });
        });

}

module.exports.deletePost = (req, res) => {
    const postId = req.params.postId;
    TradePost.findByIdAndDelete(postId).exec()
        .then(removed => {
            res.status().json({
                isSuccess: true
            });
        })
        .catch(err => {
            res.status(500).json({
                isSuccess: false,
                message: 'INTERBNAL_ERROR'
            })
        });
}
//Withdraw

module.exports.requestWithDraw = (req, res) => {
    const clientId = req.decoded.userid;
    const body = req.body;
    const minimum = config.min;
    body.amount = parseFloat(body.amount);
    Client.findOne({ _id: clientId }).exec()
        .then(client => {
            if (client.dollar >= body.amount) {
                if (body.amount >= minimum) {
                    const withdrawRequest = new WithdrawRequest({
                        accountTitle: body.accountTitle,
                        postalCode: body.postalCode,
                        iban: body.iban,
                        state: body.state,
                        country: body.country,
                        amount: body.amount,
                        client: clientId,
                    });
                    // Reserving the dollars so the client could only perform transaction if the amount is more than requested 
                    client.dollar -= body.amount;
                    client.reservedDollar += body.amount;
                    client.save()
                        .then(stored => {
                            withdrawRequest.save();
                            res.status(201).json({
                                isSuccess: true,
                                message: 'REQUEST_POSTED'
                            });
                        })
                        .catch(err => {
                            res.status(500).json({
                                isSuccess: false,
                                message: 'INTERNAL_ERROR'
                            });
                        });
                } else {
                    res.status(400).json({
                        isSuccess: false,
                        message: 'MIN_REQUIRED_AMOUNT_NOT_MET'
                    });
                }
            } else {
                res.status(400).json({
                    isSuccess: false,
                    message: 'NOT_ENOUGH_CREDIT'
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

module.exports.getWithdrawRequests = (req, res) => {
    const clientId = req.decoded.userid;
    WithdrawRequest.find({ client: clientId }).exec()
        .then(requests => {
            res.status(200).json({
                isSuccess: true,
                requests: requests
            });
        })
        .catch(err => {
            res.status(500).json({
                isSuccess: false,
                message: 'INTERNAL_ERROR'
            });
        });
}