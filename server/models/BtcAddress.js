const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BtcAddress = new Schema({
    AddressBTC: String,
    AddressETH: String
});

module.exports = mongoose.model('btcaddress', BtcAddress , 'btcaddresses');