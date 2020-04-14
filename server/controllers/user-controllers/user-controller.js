const Client = require('../../models/client');
const BtcAddress = require('../../models/btc-address');
const TradePost = require('../../models/trade-post');
const WithdrawRequest = require('../../models/withdraw-request');
const Request = require('../../models/request');
const config = require('../../config');
const mailer = require('../../mailer');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports.updateUser = (req, res) => {
    const body = req.body;
    const newOps = body.newOps;
    const userId = req.decoded.userId;

    Client.findOne({ _id: userId }).exec()
        .then(client => {
            client.name = newOps.name || client.name;
            client.password = newOps.password || client.password;
            client.address = newOps.address || client.address;
            client.phone = newOps.phone || client.phone;
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
                username: titleCase(body.username),
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
//Title case function
const titleCase = string => {
    let sentence = string.toLowerCase().split(" ");
    for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
}
// Buy/sell posts

module.exports.getClientPosts = (req, res) => {
    const clientId = req.decoded.userid;


    TradePost.find({ clientId: clientId }).exec()
        .then(posts => {
            console.log(posts);
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

// Requests
{
    module.exports.addRequest = (req, res) => {
        const body = req.body;

        const request = new Request({
            username: body.username,
            email: body.email,
            to: body.to,
            from: body.from,
            requestType: body.requestType,
            cryptoType: body.cryptoType,
            amount: parseFloat(body.amount),
            description: body.description,
            status: 'Under Process',
            clientId: ''
        });

        Client.findOne({ email: body.email })
            .exec()
            .then(async client => {
                request.clientId = client._id;
                if (body.requestType === 'Send') {
                    const btcCredit = client.btc;
                    const ethCredit = client.eth;

                    if (body.cryptoType === 'BTC') {

                        if (body.amount < btcCredit) {
                            const storedRequest = await request.save();
                            client.btc -= parseFloat(body.amount);
                            client.reservedBtc += parseFloat(body.amount);
                            client.clientRequest.push(storedRequest._id);
                            client.save()
                                .then(client => {
                                    res.status(201).json({
                                        message: 'REQUEST_STORED',
                                        isSuccess: true
                                    });
                                })
                                .catch(err => {
                                    res.status(500).json({
                                        message: err.message,
                                        isSuccess: false
                                    });
                                });

                        } else {
                            return res.status(400).json({
                                isSuccess: false,
                                message: 'NOT_ENOUGH_CREDIT'
                            })
                        }
                    } else {
                        // CryptoType = eth
                        if (body.amount < ethCredit) {
                            const storedRequest = await request.save();
                            client.eth -= parseFloat(body.amount);
                            client.reservedEth += parseFloat(body.amount);
                            client.clientRequest.push(storedRequest._id);
                            client.save()
                                .then(client => {
                                    res.status(201).json({
                                        message: 'REQUEST_STORED',
                                        isSuccess: true
                                    });
                                })
                                .catch(err => {
                                    res.status(500).json({
                                        message: err.message,
                                        isSuccess: false
                                    });
                                });
                        } else {
                            res.status(400).json({
                                isSuccess: false,
                                message: 'NOT_ENOUGH_CREDIT'
                            })
                        }
                    }
                } else {
                    const storedRequest = await request.save();
                    client.clientRequest.push(storedRequest._id);
                    client.save()
                        .then(client => {
                            res.status(201).json({
                                message: 'REQUEST_STORED',
                                isSuccess: true
                            });
                        })
                        .catch(err => {
                            res.status(500).json({
                                message: err.message,
                                isSuccess: false
                            });
                        });
                }
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({
                    isSuccess: false
                });
            });
    };

    module.exports.deleteRequest = async (req, res) => {
        const requestId = req.params.requestId;
        const request = await Request.findById({ _id: requestId });
        const client = await Client.findById({ _id: request.clientId });
        const clientRequests = client.clientRequest;

        if (request.status === 'Under Process') {

            if (request.requestType === 'Send') {

                if (request.cryptoType === 'BTC')
                    client.reservedBtc -= request.amount;
                else
                    client.reservedEth -= request.amount;
            }

            clientRequests.splice(clientRequests.indexOf(request._id), 1);

            request.remove()
                .then(async removed => {
                    await client.save();
                    res.status(200).json({
                        isSuccess: true,
                        message: 'REQUEST_REMOVED'
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        isSuccess: false,
                        message: err.message
                    });
                });

        } else {
            return res.status(400).json({
                isSuccess: false,
                message: 'ALREADY_APPROVED'
            });
        }
    };

    module.exports.getApprovedRequests = (req, res) => {
        const clientId = req.decoded.userid;
        Request.find({ clientId: clientId, status: 'Approved' })
            .select('-__v -clientId')
            .exec()
            .then(approvedRequests => {
                res.status(200).json({
                    isSuccess: true,
                    requests: approvedRequests
                });
            })
            .catch(err => {
                res.status(500).json({
                    isSuccess: false,
                    message: err.message
                });
            });
    };

    module.exports.getPendingRequests = (req, res) => {
        const clientId = req.decoded.userid;

        Request.find({ clientId: clientId, status: 'Under Process' })
            .select('-__v -clientId -approvedAt')
            .exec()
            .then(pendingRequests => {
                res.status(200).json({
                    isSuccess: true,
                    requests: pendingRequests
                });
            })
            .catch(err => {
                res.status(500).json({
                    isSuccess: false,
                    message: err.message
                });
            });
    }
}

//Summary

module.exports.getSummary = (req, res) => {
    const clientId = req.decoded.userid;

    TradePost.find({ clientId: clientId, isConcluded: true })
        .exec()
        .then(posts => {
            res.status(200).json({
                isSuccess: true,
                posts: posts
            });
        })
        .catch(err => {
            res.status(500).json({
                isSuccess: true
            });
        });
}