const Client = require('../../models/client');
const BtcAddress = require('../../models/btc-address');
const ClientSeller = require('../../models/clientSeller');
const ClientBuyer = require('../../models/clientBuyer');
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
    await bcrypt.hash(body.password, saltRounds, async (err, hash) => {
        const result = await Client.findOne({ email: email });
        if (!result) // this means result is null
        {
            let newClient = new Client({
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
                        val = Math.floor(Math.random() * length);
                        end = addresses[val];
                        newClient.btcAddress = end.btcAddress;
                        newClient.ethAddress = end.ethAddress;
                        newClient.save()
                            .then(client => {
                                mailer.sendVerificationMail(client.email);
                                res.json(client)
                            })
                            .catch(err => {
                                res.json(err);
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
                        isAuthenticated: false
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

// Buye/sell posts

module.exports.getClientPosts = (req, res) => {
    const clientId = req.decoded.userid;
    let posts = [];
    let sellArr, buyArr;

    ClientSeller.find({ clientId: clientId })
        .then(sellPosts => {
            if (sellPosts) {
                sellArr = sellPosts.map(post => {
                    post.type = 'Sell'
                    return post;
                });
            }
            ClientBuyer.find({ clientId: clientId })
                .then(buyPosts => {
                    buyArr = buyPosts.map(post => {
                        post.type = 'Buy'
                        return post;
                    });
                    res.status(200).json({
                        isSuccess: true,
                        posts: posts
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        isSuccess: true,
                        message: 'INTERNAL_ERROR'
                    });
                });
        })
        .catch(err => {
            console.log("2:" + err)
            res.status(500).json({
                isSuccess: true,
                message: 'INTERNAL_ERROR'
            });
        });
}

module.exports.deletePost = (req, res) => {
    const postId = req.params.postId;

    ClientSeller.findOne()
        .then(post => {
            if (!post) {
                ClientBuyer.findOne().exec()
                    .then(post => {
                        post.remove()
                            .then(removed => {
                                res.status(200).json({
                                    isSuccess: true
                                })
                            })
                            .catch(err => {
                                res.status(500).json({
                                    message: 'INTERNAL_ERROR'
                                });
                            });
                    })
                    .catch(err => {
                        res.status(500).json({
                            message: 'INTERNAL_ERROR'
                        });
                    });

            } else {
                post.remove()
                    .then(removed => {
                        res.status(200).json({
                            isSuccess: true
                        })
                    })
                    .catch(err => {
                        res.status(500).json({
                            message: 'INTERNAL_ERROR'
                        });
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

//Withdraw

module.exports.requestWithDraw = (req, res) => {
    const clientId = req.decoded.userid;
    const body = req.body;
    const minimum = config.min;

    if (body.amount > minimum) {
        const withdrawRequest = new WithdrawRequest({
            accountTitle: body.accountTitle,
            postalCode: body.postalCode,
            iban: body.iban,
            state: body.state,
            country: body.country,
            expiry: body.expirationDate,
            amount: body.amount,
            clientId: clientId,
        });

        Client.findOne({ _id: clientId }).exec()
            .then(client => {
                // Reserving the dollars so the client could only perform transaction if the amount is more than requested 
                client.dollar - + body.amount;
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

            })
            .catch(err => {

            });
    } else {
        // Minimum requirement doesn't met
        res.status(400).json({
            isSuccess: false,
            message: 'MIN_REQUIREMENT_NOT_MET'
        });
    }
}