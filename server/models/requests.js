const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Request = new Schema({ 
    Username: String,
    Email: String,
    Phone: Intl,
    Address: String,
    Status: String,
    TypeOfRequest: String,
    BTC:Intl,
    ETH:Intl,
    Dollars:Intl
   });

   module.exports = mongoose.model('request',Request,'allrequests');
