const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ClientBuyer = new Schema({ 
    Name: String,
    Type_of_currency: String,
    Price: Intl,
    Quantity: Intl,
    Change: Number,
    Wallet:String
   });

module.exports = mongoose.model('clientbuyer',ClientBuyer,'clientsBuyer');
