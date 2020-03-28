const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClientSeller = new Schema({
    name: String,
    cryptoType: String,
    price: Intl,
    limit: Intl,
    change: Number,
    walletAddress: String,
    clientId: {type: Schema.Types.ObjectId, ref: 'clients'}
});

module.exports = mongoose.model('clientseller', ClientSeller, 'clientsSeller');
