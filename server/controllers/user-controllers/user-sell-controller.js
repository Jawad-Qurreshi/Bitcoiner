const TradePost = require('../../models/trade-post');
const Client = require('../../models/client');


module.exports.confirmBuy = (req, res) => {
    const buyerId = req.decoded.userid;
    const sellPostId = req.body.id;

    TradePost.findOne({ _id: sellPostId }).exec()
        .then(sellPost => {
            Client.findOne({ _id: buyerId }).exec()
                .then(buyer => {
                    Client.findOne({ _id: sellPost.clientId }).exec()
                        .then(seller => {
                            performTransaction(buyer, seller, sellPost, req.body)
                                .then(result => {
                                    res.status(200).json({
                                        isSuccess: true
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
                            res.status(500).json({
                                isSuccess: false,
                                message: 'INTERNAL_ERROR'
                            });
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
            res.status(500).json({
                isSuccess: false,
                message: 'INTERNAL_ERROR'
            });
        });
}

const performTransaction = (buyer, seller, post, body) => {
    return new Promise((resolve, reject) => {
        const currencyAmount = parseFloat(body.amount);
        const dollar = parseFloat(body.dollar);
        if (post.cryptoType === 'BTC') {
            if (seller.btc > currencyAmount) {
                if (buyer.dollar > dollar) {
                    ///////
                    buyer.dollar -= dollar;
                    seller.dollar += dollar;
                    seller.btc -= currencyAmount;
                    buyer.btc += currencyAmount;
                    seller.save()
                        .then(stored => {
                            buyer.save()
                                .then(stored => {
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
                        message: 'NOT_ENOUGH_CREDIT_BUYER'
                    });
                }
            } else {
                post.remove()
                    .then(removed => {
                        res.status(400).json({
                            isSuccess: false,
                            message: 'NOT_ENOUGH_CREDIT_SELLER'
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
            if (seller.eth > currencyAmount) {
                if (buyer.dollar > dollar) {
                    buyer.dollar -= dollar;
                    seller.dollar += dollar;
                    seller.eth -= currencyAmount;
                    buyer.eth += currencyAmount;
                    seller.save()
                        .then(stored => {
                            buyer.save()
                                .then(stored => {
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
                        message: 'NOT_ENOUGH_CREDIT_BUYER'
                    });
                }

            } else {
                post.remove()
                    .then(removed => {
                        res.status(400).json({
                            isSuccess: false,
                            message: 'NOT_ENOUGH_CREDIT_SELLER'
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
}