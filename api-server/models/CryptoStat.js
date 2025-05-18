const mongoose = require('mongoose');

const CryptoStatSchema = new mongoose.Schema({
  coin: String,
  price: Number,
  marketCap: Number,
  change24h: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CryptoStat', CryptoStatSchema);
// This schema defines the structure of the CryptoStat model, which includes fields for coin name, price, market cap, 24-hour change percentage, and a timestamp.