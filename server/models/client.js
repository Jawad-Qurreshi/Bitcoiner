const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Client = new Schema({
    username: String,
    email: String,
    password: String,
    phone: Intl,
    address: String,
    btc: { type: Intl, default: 0 },
    eth: { type: Intl, default: 0 },
    dollar: { type: Intl, default: 0 },
    btcAddres: String,
    ethAddress: String,
    clientRequest: [{ type: mongoose.Schema.Types.ObjectId, ref: 'clientrequests' }]
});

module.exports = mongoose.model('client', Client, 'clients');


