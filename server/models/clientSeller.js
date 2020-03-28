const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClientSeller = new Schema({
    name: String,
    cryptoType: String,
    price: Intl,
    walletAddress: String,
    description: String,
    clientId: { type: Schema.Types.ObjectId, ref: 'clients' }
});

module.exports = mongoose.model('clientseller', ClientSeller, 'clientsSeller');
