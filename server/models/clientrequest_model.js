const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientRequest = new Schema({
    status: {type: String},
    request_type: {type: String},
    crypto_type: {type: String},
    amount: mongoose.Schema.Types.Decimal128,
    client: {type: mongoose.Schema.Types.ObjectId, ref: 'clients'}

});


module.exports = mongoose.model('clientrequest', ClientRequest);