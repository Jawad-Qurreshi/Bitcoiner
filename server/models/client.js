const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Client = new Schema({
    Username: String,
    Email: String,
    Password: String,
    Phone: Intl,
    //DOB:Date,
    Address: String,
    BTC: Intl,
    ETC: Intl,
    Dollars: Intl,
    ClientRequest: [{ type: mongoose.Schema.Types.ObjectId, ref: 'clientrequests' }]
});

module.exports = mongoose.model('client', Client, 'clients');

