const ClientSeller = require('../../models/clientSeller');
const Client = require('../../models/client');

module.exports.confirmBuy = (req, res) => {
    const buyerId = req.decoded.userid;
    const sellPostId = req.body.id;

    ClientSeller.findOne({ _id: sellPostId }).exec()
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
                                    res.status().json({
                                        isSuccess: false,
                                        message: 'INTERNAL_ERROR'
                                    });
                                });
                        })
                        .catch(err => {
                            res.status().json({
                                isSuccess: false,
                                message: 'INTERNAL_ERROR'
                            });
                        });
                })
                .catch(err => {
                    res.status().json({
                        isSuccess: false,
                        message: 'INTERNAL_ERROR'
                    });
                });
        })
        .catch(err => {
            res.status().json({
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
            if (buyer.dollar >= dollar) {
                ///////
                buyer.dollar = buyer.dollar - dollar;
                console.log(buyer.dollar);
                seller.dollar = buyer.dollar + dollar;
                console.log(seller.dollar);
                buyer.btc += currencyAmount;
                //Clearing reserved amount for the post
                seller.reservedBtc -= currencyAmount;   // Recheck this logic
                seller.save()
                    .then(stored => {
                        buyer.save()
                            .then(stored => {
                                post.remove()
                                    .then(removed => {
                                        resolve(removed);
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
                    message: 'NOT_ENOUGH_CREDIT'
                });
            }
        } else {
            //post.cryptoType === 'ETH'
            if (buyer.dollar >= dollar) {
                ///////
                buyer.dollar -= dollar;
                seller.dollar += dollar;
                console.log(seller.dollar);
                console.log(buyer.dollar);
                buyer.eth += currencyAmount;
                //Clearing reserved amount for the post
                seller.reservedEth -= currencyAmount;   // Recheck this logic
                seller.save()
                    .then(stored => {
                        buyer.save()
                            .then(stored => {
                                post.remove()
                                    .then(removed => {
                                        resolve(removed);
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
                    message: 'NOT_ENOUGH_CREDIT'
                });
            }
        }
    });
}