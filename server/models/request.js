const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Request = new Schema({
    username: String,
    email: String,
    to: String,
    from: String,
    status: String,
    requestType: String,
    cryptoType: String,
    description: String,
    amount: Intl,
    createdAt: { type: Date, default: Date.now },
    approvedAt: Date,
    clientId: { type: Schema.Types.ObjectId, ref: 'clients' }
});

module.exports = mongoose.model('request', Request);
