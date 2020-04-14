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
const admin = require('../middlewares/admin-middleware');
//Controllers
const adminController = require('../controllers/admin-controllers/admin-controller');
const buyController = require('../controllers/user-controllers/user-buy-controller');
const sellController = require('../controllers/user-controllers/user-sell-controller');
const userController = require('../controllers/user-controllers/user-controller');


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
{
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
            postType: 'Buy',
            clientId: clientId
        });

        buyPost.save()
            .then(stored => {
                res.status(200).json({
                    isSuccess: true,
                    message: 'SELL_POSTED'
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    isSuccess: false,
                    message: 'INTERNAL_ERROR'
                });
            });
    });
    router.get('/buyer/all', user.checAuth, function (req, res) {
        const clientId = req.decoded.userid;
        TradePost.find({ postType: 'Buy', clientId: { $ne: clientId }, isConcluded: false })
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
            cryptoType: body.cryptoType,
            price: parseFloat(body.price),
            description: body.description,
            clientId: clientId,
            postType: 'Sell'
        });
        sellPost.save()
            .then(stored => {
                res.status(200).json({
                    isSuccess: true,
                    message: 'SELL_POSTED'
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    isSuccess: false,
                    message: 'INTERNAL_ERROR'
                });
            });
    });
    router.get('/seller/all', user.checAuth, function (req, res) {
        const clientId = req.decoded.userid;
        TradePost.find({ postType: 'Sell', clientId: { $ne: clientId }, isConcluded: false })
            .exec(function (err, sellPost) {
                if (err) {
                    console.log('Error while retrieving All seller in api.js');
                } else {
                    res.json({
                        result: sellPost
                    });
                }
            });
    });
    router.post('/confirm/buy', user.checAuth, sellController.confirmBuy);
    ////////////////////Client's Requests routes/////////////
    router.post('/request/add', user.checAuth, userController.addRequest);
    router.delete('/request/:requestId', user.checAuth, userController.deleteRequest);
    router.get('/request/approved', user.checAuth, userController.getApprovedRequests);
    router.get('/request/pending', user.checAuth, userController.getPendingRequests);
    ///////////////////////////login   Signup////////////////////////////////////
    router.post('/signup', userController.signUp);
    router.post('/login', userController.logIn);
    router.post('/user/update', user.checAuth, userController.updateUser);

    ////////////////////////////////Clients///////////////////////////////////////////
    router.get('/client', user.checAuth, userController.getClient);
    //////////////////////////// Buy/Sell Posts of Client/////////////////////
    router.get('/post/all', user.checAuth, userController.getClientPosts);
    router.delete('/post/:postId', user.checAuth, userController.deletePost);

    /////////Summary
    router.get('/post/summary', user.checAuth, userController.getSummary);

}
////////////////////////////ADMIN/////////////////////////
{
    //Admin Create
    router.post('/admin/create', adminController.createAdmin);
    //Admin Authenticate
    router.post('/admin/authenticate', adminController.checkAdminAuth);
    //Get all requests
    router.get('/admin/request/withdraw/all', admin.checkAdminAuth, adminController.getWithdrawRequests);

    //verify user
    router.put('/admin/verify/user/:userId', admin.checkAdminAuth, adminController.verifyUser);
    ///////////////////////Currencey Address//////////////
    router.post('/admin/address/add', admin.checkAdminAuth, adminController.addAddress);
    router.get('/admin/address/all', admin.checkAdminAuth, adminController.getAllAddress);
    //All client
    router.get('/admin/client/all', admin.checkAdminAuth, adminController.getAllClients);
    //Admin's requests routes
    //This approves a request
    router.put('/admin/request/approve/:id', admin.checkAdminAuth, adminController.approveRequest);
    router.get('/admin/request/approved/all', admin.checkAdminAuth, adminController.getApprovedRequests);
    router.get('/admin/request/pending/all', admin.checkAdminAuth, adminController.getPendingRequests);
    router.put('/admin/verify/withdraw/:requestId', admin.checkAdminAuth, adminController.verifyWithdraw);
}

module.exports = router;