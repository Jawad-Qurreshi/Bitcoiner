const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClientSeller = new Schema({ 
    Name: String,
    Type_of_currency: String,
    Price: Intl,
    Limit: Intl,
    Change: Number,
    Wallet:String
   });

module.exports = mongoose.model('clientseller',ClientSeller,'clientsSeller');
