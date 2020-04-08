const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const globalSchema = new Schema({

});

module.exports = mongoose.model('global', globalSchema);