const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientRequest = new Schema({
    status: {type: String, required: true},
    request_type: {type: String, required: true},
    crypto_type: {type: String, required: true},
    amount: mongoose.Schema.Types.Decimal128,
    client: {type: mongoose.Schema.Types.ObjectId, ref: 'clients'}

});


module.exports = mongoose.model('clientrequest', ClientRequest);