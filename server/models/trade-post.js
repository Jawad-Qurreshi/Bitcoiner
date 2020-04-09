const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tradePostSchema = new Schema({
    name: String,
    cryptoType: String,
    isConcluded: { type: Boolean, default: false },
    price: Intl,
    description: String,
    amount: Intl,
    postType: { type: String, required: true },
    limit: {
        minimum: { type: Intl, default: 0 },
        maximum: { type: Intl, default: 0 }
    },
    clientId: { type: Schema.Types.ObjectId, ref: 'clients' },
    createdtAt: { type: Date, default: Date.now },
    concludedAt: { type: Date, default: 0 }
});

module.exports = mongoose.model('tradepost', tradePostSchema);