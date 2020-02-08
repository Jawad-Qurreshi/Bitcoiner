const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EthAddress = new Schema({
    id : Number,
    address : String
});

module.export = mongoose.model('ethaddresses', EthAddress);
