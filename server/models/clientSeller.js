const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClientSeller = new Schema({
    name: String,
    email: String,
    cryptoType: String,
    price: Intl,
    description: String,
    limit: {
        minimum: { type: Intl, default: 0 },
        maximum: { type: Intl, default: 0 }
    },
    clientId: { type: Schema.Types.ObjectId, ref: 'clients' }
});

module.exports = mongoose.model('clientseller', ClientSeller, 'clientsSeller');
