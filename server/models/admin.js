const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminShcema = new Schema({
    username: String,
    password: String,
    profit: Intl
});


module.exports = mongoose.model('admin', adminShcema);