const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const logSchema = new Schema({
    clientId: { type: Schema.Types.ObjectId, ref: 'client' },
    withdrawRequests: [{ type: Schema.Types.ObjectId, ref: 'withdrawrequest' }],
    tradePosts: [{ type: Schema.Types.ObjectId, ref: 'tradepost' }]
});

module.exports = mongoose.model('log', logSchema);