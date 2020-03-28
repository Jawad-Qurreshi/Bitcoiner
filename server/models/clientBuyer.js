const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClientBuyer = new Schema({
    name: String,
    cryptoType: String,
    price: Intl,
    quantity: Intl,
    walletAddress: String,
    description: String,
    clientId: { type: Schema.Types.ObjectId, ref: 'clients' },
    createdtAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('clientbuyer', ClientBuyer, 'clientsBuyer');
