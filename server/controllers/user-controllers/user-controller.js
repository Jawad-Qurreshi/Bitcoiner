const Client = require('../../models/client');
const BtcAddress = require('../../models/BtcAddress');

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
                        // if (length === 1) {
                        //   val = 0;
                        // } else {
                        //   val = Math.floor(Math.random() * length + 1) + 1;
                        // }
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