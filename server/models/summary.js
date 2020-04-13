const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const summarySchema = new Schema({
    client: { type: Schema.Types.ObjectId, ref: 'client' },
    request: { type: Schema.Types.ObjectId, ref: 'request' },
    withdrawrequest: { type: Schema.Types.ObjectId, ref: 'withdrawrequest' }
});

module.exports = mongoose.model('summary', summarySchema);