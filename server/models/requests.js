const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Request = new Schema({
    username: String,
    email: String,
    address: String,
    status: String,
    requestType: String,
    amount: Int32Array,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('request', Request, 'allrequests');
