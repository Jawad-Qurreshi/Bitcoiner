const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const logSchema = new Schema({
    clientId: { type: Schema.Types.ObjectId, ref: 'client' },
});

module.exports = mongoose.model('log', logSchema);