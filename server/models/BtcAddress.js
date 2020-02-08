const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BtcAddress = new Schema({
    id: Number,
    address: String
});

module.exports = mongoose.model('btcaddresses', BtcAddress);