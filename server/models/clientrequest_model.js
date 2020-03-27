const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientRequest = new Schema({
    status: { type: String },
    request_type: { type: String },
    crypto_type: { type: String },
    address: { type: String },
    amount: Schema.Types.Decimal128,
    usd_amount: Intl,
    date: Date,
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'clients' }

});


module.exports = mongoose.model('clientrequest', ClientRequest, 'clientrequests');
