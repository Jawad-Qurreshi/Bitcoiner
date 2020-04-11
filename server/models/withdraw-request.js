const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const withdrawRequestSchema = new Schema({
    accountTitle: { type: String, required: true },
    postalCode: { type: String, required: true },
    iban: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    amount: Intl,
    client: { type: Schema.Types.ObjectId, ref: 'client' },
    status: { type: String, default: 'Under Process' },
    createdAt: { type: Date, default: Date.now },
    approvedAt: { type: Date, default: null }
});

module.exports = mongoose.model('withdrawrequest', withdrawRequestSchema);