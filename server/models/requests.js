const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Request = new Schema({
    username: String,
    email: String,
    to: String,
    from: String,
    status: String,
    requestType: String,
    amount: Intl,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('request', Request, 'allrequests');
