const Client = require('../../models/client');
const TradePost = require('../../models/trade-post');
const config = require('../../config');
const Admin = require('../../models/admin');
const addToAdmin = require('../admin-controllers/admin-controller').addToAdmin;

module.exports.confirmSell = async (req, res) => {
    const body = req.body;
    const postId = body.id;
    const sellerId = req.decoded.userid;

    TradePost.findOne({ _id: postId }).exec()
        .then(buyPost => {
            const buyerId = buyPost.clientId;

            Client.findOne({ _id: sellerId }).exec()
                .then(seller => {
                    Client.findOne({ _id: buyerId }).exec()
                        .then(buyer => {
                            performTransaction(buyer, seller, buyPost, body)
                                .then(result => {
                                    res.status(200).json({
                                        isSuccess: true,
                                        message: 'TRANSACTION_DONE'
                                    });
                                })
                                .catch(err => {
                                    console.log(err);
                                    res.status(500).json({
                                        isSuccess: false,
                                        message: 'INTERNAL_ERROR'
                                    });
                                });
                        })
                        .catch(err => {
                            console.log(err);
                            res.status(500).json({
                                isSuccess: false,
                                message: 'INTERNAL_ERROR'
                            });
                        })
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({
                        isSuccess: false,
                        message: 'INTERNAL_ERROR'
                    });
                });

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                isSuccess: false,
                message: 'INTERNAL_ERROR'
            });
        });
};

const performTransaction = (buyer, seller, post, body) => {
    return new Promise(async (resolve, reject) => {
        const dollar = parseFloat(body.dollar);
        const currencyAmount = parseFloat(body.amount);
        if (post.cryptoType === 'BTC') {
            const adminShare = parseFloat(dollar * (config.profit.TRADE / 100));
            const deduction = dollar + adminShare;
            const deposit = dollar - adminShare;
            if (buyer.dollar > deduction) {
                if (seller.btc > currencyAmount) {
                    seller.btc -= currencyAmount;
                    buyer.btc += currencyAmount;
                    seller.dollar += deposit;
                    buyer.dollar -= deduction;
                    const x = deduction - deposit;
                    addToAdmin(x);
                    seller.save()
                        .then(saved => {
                            buyer.save()
                                .then(saved => {
                                    post.isConcluded = true;
                                    post.concludedAt = Date.now();
                                    post.amount = currencyAmount;
                                    post.save()
                                        .then(stored => {
                                            resolve(stored);
                                        })
                                        .catch(err => {
                                            reject(err);
                                        });
                                })
                                .catch(err => {
                                    reject(err);
                                });
                        })
                        .catch(err => {
                            reject(err);
                        });
                } else {
                    res.status(400).json({
                        isSuccess: false,
                        message: 'NOT_ENOUGH_CREDIT_SELLER'
                    });
                }
            } else {
                post.remove()
                    .then(removed => {
                        res.status(400).json({
                            isSuccess: false,
                            message: 'NOT_ENOUGH_CREDIT_BUYER'
                        });
                    })
                    .catch(err => {
                        res.status(500).json({
                            isSuccess: false,
                            message: 'INTERNAL_ERROR'
                        });
                    });
            }
        } else {
            //ETH Transaction
            const adminShare = parseFloat(dollar * (config.profit.TRADE / 100));
            const deduction = dollar + adminShare;
            const deposit = dollar - adminShare;
            if (buyer.dollar > deduction) {
                if (seller.eth > currencyAmount) {
                    seller.eth -= currencyAmount;
                    buyer.eth += currencyAmount;
                    buyer.dollar -= deduction;
                    seller.dollar += deposit;
                    const x = deduction - deposit;
                    addToAdmin(x);
                    seller.save()
                        .then(saved => {
                            buyer.save()
                                .then(saved => {
                                    post.isConcluded = true;
                                    post.concludedAt = Date.now();
                                    post.save()
                                        .then(stored => {
                                            resolve(stored);
                                        })
                                        .catch(err => {
                                            reject(err);
                                        });
                                })
                                .catch(err => {
                                    reject(err);
                                });
                        })
                        .catch(err => {
                            reject(err);
                        });
                } else {
                    res.status(400).json({
                        isSuccess: false,
                        message: 'NOT_ENOUGH_CREDIT_SELLER'
                    });
                }
            } else {
                post.remove()
                    .then(removed => {
                        res.status(400).json({
                            isSuccess: false,
                            message: 'NOT_ENOUGH_CREDIT_BUYER'
                        });
                    })
                    .catch(err => {
                        res.status(500).json({
                            isSuccess: false,
                            message: 'INTERNAL_ERROR'
                        });
                    });
            }
        }
    });
};