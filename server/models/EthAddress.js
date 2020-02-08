const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const EthAddress  = new Schema({
    id: Number,
    Address: String
});

module.exports = mongoose.model('ethaddress',EthAddress,'ethaddresses');