const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClientSeller = new Schema({
    name: String,
    cryptoType: String,
    price: Intl,
    description: String,
    quantity: Intl,
    sellerId: { type: Schema.Types.ObjectId, ref: 'clients' },
    buyerId: { type: Schema.Types.ObjectId, ref: 'clients' }
});

module.exports = mongoose.model('clientseller', ClientSeller, 'clientsSeller');
