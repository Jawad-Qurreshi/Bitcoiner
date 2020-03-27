const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BtcAddress = new Schema({
    btcAddress: String,
    ethAddress: String
});

module.exports = mongoose.model('btcaddress', BtcAddress, 'btcaddresses');