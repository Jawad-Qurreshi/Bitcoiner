const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BtcAddress = new Schema({
    id: Number,
    Address: String
});

module.exports = mongoose.model('btcaddress', BtcAddress , 'btcaddresses');