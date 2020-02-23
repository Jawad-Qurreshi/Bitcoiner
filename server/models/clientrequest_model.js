const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientRequest = new Schema({
    status: {type: String},
    request_type: {type: String},
    crypto_type: {type: String},
    address: {type: String},
    //amount: mongoose.Schema.Types.Decimal128,
    amount : Intl,
    usd_amount : Intl,
    date:Date,
    client: {type: mongoose.Schema.Types.ObjectId, ref: 'clients'}

});


module.exports = mongoose.model('clientrequest',ClientRequest,'clientrequests');
