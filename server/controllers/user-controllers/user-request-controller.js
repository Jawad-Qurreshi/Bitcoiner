
const Request = require('../../models/request');
const Client = require('../../models/client');

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