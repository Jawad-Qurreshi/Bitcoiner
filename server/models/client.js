const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Client = new Schema({
    username: String,
    email: String,
    password: String,
    phone: Intl,
    address: String,
    btcAddress: String,
    ethAddress: String,
    isVerified: { type: Boolean, default: false },
    btc: { type: Intl, default: 0 },
    reservedBtc: { type: Intl, default: 0 },
    eth: { type: Intl, default: 0 },
    reservedEth: { type: Intl, default: 0 },
    dollar: { type: Intl, default: 0 },
    reservedDollar: { type: Intl, default: 0 },
    clientRequest: [{ type: mongoose.Schema.Types.ObjectId, ref: 'request' }]
});

module.exports = mongoose.model('client', Client);


