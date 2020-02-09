const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Client = new Schema({
    Username: String,
    Email: String,
    Password: String,
    Phone: Intl,
    //DOB:Date,
    Address: String,
    BTC: { type: Intl, default: 0 },
    ETC: { type: Intl, default: 0 },
    Dollars: { type: Intl, default: 0 },
    BitAddress: String,
    EthAddress: String,
    ClientRequest: [{ type: mongoose.Schema.Types.ObjectId, ref: 'clientrequests' }]
});

module.exports = mongoose.model('client', Client, 'clients');

//client.clientrequest.push(clientrequest_id).update()/patch

