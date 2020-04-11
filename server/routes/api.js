//npm install node-binance-api --save

const express = require('express');
const mongoose = require('mongoose');


//Models
const Client = require('../models/client');
const Request = require('../models/request');
const TradePost = require('../models/trade-post');
//Configuration file
const config = require('../config');
//Mailer
const mailer = require('../mailer');
//Check User middleware
const user = require('../middlewares/user-middlware');
//Controllers
const adminController = require('../controllers/admin-controllers/admin-controller');
const buyController = require('../controllers/user-controllers/user-buy-controller');
const sellController = require('../controllers/user-controllers/user-sell-controller');
const userController = require('../controllers/user-controllers/user-controller');
const userRequestController = require('../controllers/user-controllers/user-request-controller');


//Initializing
const router = express.Router();
const dbUrl = `mongodb+srv://${config.db.USER}:${config.db.PWD}@cluster0-8jh11.mongodb.net/test?retryWrites=true&w=majority`
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true }, function (err) {
    if (err) {
        console.error("Error ! " + err);
    }
});

///////////////////////Password//////////////////////

router.post('/user/recovery/password', (req, res) => {
    const to = req.body.email;
    mailer.sendPasswordRecoveryEmail(to);
    res.status(200).json({
        isSuccess: true,
        message: 'MAIL_SENT'
    });
});

///////////////////////////////////BIT API/////////////////////////////////////
const binance = require('node-binance-api')().options({
    APIKEY: 'https://api.binance.com/api/v3/ticker/price',
    useServerTime: true // If you get timestamp errors, synchronize to server time at startup
});
//Getting bitcoin price
router.get('/bitapi', function (req, res) {
    binance.prices('BTCUSDT', (error, ticker) => {
        res.send({
            ticker: ticker
        });
    });
});
//Getting ethereium price
router.get('/ethapi', user.checAuth, function (req, res) {
    binance.prices('ETHUSDT', (error, ticker) => {
        res.json({
            ticker: ticker
        });
    });
});
////////////////////////////Buyers////////////////////////////////
router.post('/buyer/add', user.checAuth, (req, res) => {
    const body = req.body;
    const limit = body.limit;
    const clientId = req.decoded.userid;
    limit.minimum = parseFloat(limit.minimum);
    limit.maximum = parseFloat(limit.maximum);

    const buyPost = new TradePost({
        name: body.name,
        cryptoType: body.cryptoType,
        price: parseFloat(body.price),
        description: body.description,
        limit: limit,
        amount: parseFloat(body.amount),
        postType: 'Buy',
        clientId: clientId
    });

    buyPost.save()
        .then(stored => {
            res.status().json({
                isSuccess: true,
                message: 'SELL_POSTED'
            });
        })
        .catch(err => {
            res.status(500).json({
                isSuccess: false,
                message: 'INTERNAL_ERROR'
            });
        });
});
router.get('/buyer/all', user.checAuth, function (req, res) {
    TradePost.find({ postType: 'buy' })
        .exec()
        .then(result => {

            res.status(200).json({
                result: result,
                isSuccess: true
            });
        })
        .catch(err => {
            res.status(500).json({
                message: err.message,
                isSuccess: false
            })
        });
});
router.delete('/buyer/:id', user.checAuth, function (req, res) {
    TradePost.findByIdAndRemove(req.params.id, function (err, deletedBuyer) {
        if (err) {
            res.send("Error deleting buyer")
        } else {
            res.json(deletedBuyer);
        }
    })
});
router.post('/confirm/sell', user.checAuth, buyController.confirmSell);
/////////////////Client WIthdraw//////////

router.post('/request/withdraw', user.checAuth, user.isVerified, userController.requestWithDraw);
router.get('/request/withdraw', user.checAuth, user.isVerified, userController.getWithdrawRequests);


////////////////////////////Sellers//////////////////////////////////
router.post('/seller/add', user.checAuth, async (req, res) => {
    const body = req.body;
    const clientId = req.decoded.userid;
    const limit = req.body.limit;
    limit.minimum = parseFloat(limit.minimum);
    limit.maximum = parseFloat(limit.maximum);
    const sellPost = new TradePost({
        name: body.name,
        limit: limit,
        amount: parseFloat(body.amount),
        cryptoType: body.cryptoType,
        price: parseFloat(body.price),
        description: body.description,
        clientId: clientId,
        type: 'Sell'
    });
    sellPost.save()
        .then(stored => {
            res.status(200).json({
                isSuccess: true,
                message: 'SELL_POSTED'
            });
        })
        .catch(err => {
            res.status(500).json({
                isSuccess: false,
                message: 'INTERNAL_ERROR'
            });
        });
});
router.get('/seller/all', user.checAuth, function (req, res) {
    TradePost.find({ postType: 'Sell' })
        .exec(function (err, sellPost) {
            if (err) {
                console.log('Error while retrieving All seller in api.js');
            } else {
                res.json({
                    result: sellPost
                });
            }
        });
})
router.delete('/seller/:id', user.checAuth, function (req, res) {
    TradePost.findByIdAndRemove(req.params.id, function (err, deletedSeller) {
        if (err) {
            res.send("Error deleting client")
        } else {
            res.json(deletedSeller);
        }
    })
})
router.post('/confirm/buy', user.checAuth, sellController.confirmBuy);
////////////////////Client's Requests routes/////////////
router.post('/request/add', user.checAuth, userRequestController.addRequest);
router.delete('/request/:requestId', user.checAuth, userRequestController.deleteRequest);
router.get('/request/approved', user.checAuth, userRequestController.getApprovedRequests);
router.get('/request/pending', user.checAuth, userRequestController.getPendingRequests);
///////////////////////////login   Signup////////////////////////////////////
router.post('/signup', userController.signUp);
router.post('/login', userController.logIn);
router.post('/user/update', user.checAuth, userController.updateUser);

////////////////////////////////Clients///////////////////////////////////////////

router.get('/client', user.checAuth, userController.getClient);


//////////////////////////// Buy/Sell Posts of Client/////////////////////
router.get('/post/all', user.checAuth, userController.getClientPosts);
router.delete('/post/:postId', user.checAuth, userController.deletePost);
////////////////////////////ADMIN/////////////////////////
{
    router.get('/admin/request/withdraw/all', () => { });
    router.post('/admin/create', adminController.createAdmin);
    router.post('/admin/authenticate', adminController.checkAdminAuth);
    router.put('/admin/verify/user/:userId', adminController.verifyUser);
    ///////////////////////Currencey Address//////////////
    router.post('/address/add', user.checAuth, adminController.addAddress);
    router.get('/address/all', user.checAuth, adminController.getAllAddress);
    router.get('/client/all', user.checAuth, function (req, res) {

        Client.find({})
            .exec(function (err, clients) {
                if (err) {
                    console.log('Error while retrieving clients');
                } else {
                    res.json(clients);
                }
            });
    });
    //Admin's requests routes
    //This approves a request
    router.put('/request/approve/:id', user.checAuth, async function (req, res) {
        Request.findById({ _id: req.params.id }).exec()
            .then(async request => {
                if (request.status === 'Under Process') {
                    const client = await Client.findById({ _id: request.clientId }).exec();
                    if (request.requestType === 'Receive') {
                        if (request.cryptoType === 'BTC') {
                            client.btc += parseFloat(request.amount);
                            client.save();
                        } else {
                            client.eth += parseFloat(request.amount);
                            client.save();
                        }
                    } else {
                        if (request.cryptoType === 'BTC') {
                            client.reservedBtc -= parseFloat(request.amount);
                            client.save();
                        } else {
                            client.reservedEth -= parseFloat(request.amount);
                            client.save();
                        }
                    }
                    request.status = 'Approved';
                    request.approvedAt = Date.now();
                    request.save()
                        .then(request => {
                            res.status(200).json({
                                message: 'Request Approved!',
                                request: request
                            })
                        })
                        .catch(err => {
                            res.status(500).json({
                                message: err.message
                            });
                        });

                } else {
                    return res.status(400).json({
                        isSuccess: false,
                        message: 'Request Already Approved!'
                    });
                }
            })
            .catch(err => {
                console.log(err)
            });
    });
    router.get('/admin/request/approved/all', (req, res) => {
        console.log('Okay');


        Request.find({ status: "Approved" })
            .select('-__v -clientId')
            .exec()
            .then(approvedRequests => {
                res.status(200).json({
                    requests: approvedRequests,
                    isSuccess: true
                });
            })
            .catch(err => {
                res.status(500).json({
                    isSuccess: false,
                    message: err
                });
            });
    });
    router.get('/admin/request/pending/all', (req, res) => {
        Request.find()
            .select('-__v -clientId -approvedAt')
            .exec()
            .then(pendingRequests => {
                console.log(pendingRequests);
                res.status(200).json({
                    isSuccess: true,
                    requests: pendingRequests
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    isSuccess: false,
                    message: err.message
                });
            });
    });
    router.put('/admin/verify/withdraw/:requestId', adminController.verifyWithdraw);
}
module.exports = router;