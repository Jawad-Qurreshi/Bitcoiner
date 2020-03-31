const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClientBuyer = new Schema({
    name: String,
    email: String,
    cryptoType: String,
    price: Intl,
    limit: {
        minimum: { type: Intl, default: 0 },
        maximum: { type: Intl, default: 0 }
    },
    walletAddress: String,
    description: String,
    clientId: { type: Schema.Types.ObjectId, ref: 'clients' },
    createdtAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('clientbuyer', ClientBuyer, 'clientsBuyer');
