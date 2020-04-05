const Client = require('../../models/client');
const BuyPost = require('../../models/clientBuyer');



module.exports.confirm_sale = async (req, res) => {
    const body = req.body;
    const postId = body.id;
    const sellerId = req.decoded.userId;
    const dollarToSell = body.dollar;
    const currencyAmount = body.amount;
    let buyer, seller;

    seller = await Client.findOne({ _id: sellerId }).exec();

    BuyPost.findOne({ _id: postId }).exec()
        .then(buyPost => {
            const buyerId = buyPost._id;
            buyer = await Client.findOne({_id: buyerId}).exec();

        })
        .catch(err => {

        });

}

const performTransaction = (buyer, seller, post) => {
    return new Promise(()) 

    if(post.cryptoType === 'BTC' ) {
        if(seller.btc > 1)

    }
}