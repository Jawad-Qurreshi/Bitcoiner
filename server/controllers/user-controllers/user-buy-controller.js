const Client = require('../../models/client');
const BuyPost = require('../../models/clientBuyer');

module.exports.confirm_sale = async (req, res) => {
    const body = req.body;
    const postId = body.id;
    const sellerId = req.decoded.userid;

    BuyPost.findOne({ _id: postId }).exec()
        .then(buyPost => {
            const buyerId = buyPost.clientId;

            Client.findOne({ _id: sellerId }).exec()
                .then(seller => {
                    Client.findOne({ _id: buyerId }).exec()
                        .then(buyer => {
                            performTransaction(buyer, seller, buyPost, body)
                                .then(() => {
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
                })

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                isSuccess: false,
                message: 'INTERNAL_ERROR'
            });
        });
}

const performTransaction = (buyer, seller, post, body) => {
    return new Promise(async (resolve, reject) => {
        const dollarToSell = parseFloat(body.dollar);
        const currencyAmount = parseFloat(body.amount);
        if (post.cryptoType === 'BTC') {
            if (seller.btc > currencyAmount) {
                seller.btc -= currencyAmount;
                buyer.btc += currencyAmount;
                buyer.reservedDollar -= dollarToSell;
                seller.dollar += dollarToSell;
                //Clearing the reserved dollars of the post
                buyer.reservedDollar -= parseFloat(post.limit.maximum - dollarToSell);

                seller.save()
                    .then(saved => {
                        buyer.save()
                            .then(saved => {
                                post.remove()
                                    .then(removed => {
                                        resolve();
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
            //ETH Transaction
            if (seller.eth > currencyAmount) {
                seller.eth -= currencyAmount;
                buyer.eth += currencyAmount;
                buyer.reservedDollar -= dollarToSell;
                seller.dollar += dollarToSell;
                //Clearing the reserved dollars of the post
                buyer.reservedDollar -= parseFloat(post.limit.maximum - dollarToSell);

                seller.save()
                    .then(saved => {
                        buyer.save()
                            .then(saved => {
                                post.remove()
                                    .then(removed => {
                                        resolve();
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