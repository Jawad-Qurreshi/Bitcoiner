const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClientBuyer = new Schema({
    name: String,
    cryptoType: String,
    price: Intl,
    quantity: Intl,
    change: Number,
    walletAddress: String
});

module.exports = mongoose.model('clientbuyer', ClientBuyer, 'clientsBuyer');
