const express = require('express');
const CryptoStat = require('../models/CryptoStat');
const router = express.Router();

router.get('/stats', async (req, res) => {
  const coin = req.query.coin;
  if (!coin) return res.status(400).send({ error: 'coin is required' });

  const latest = await CryptoStat.findOne({ coin }).sort({ timestamp: -1 });
  if (!latest) return res.status(404).send({ error: 'No data found' });

  res.json({
    price: latest.price,
    marketCap: latest.marketCap,
    "24hChange": latest.change24h
  });
});

router.get('/deviation', async (req, res) => {
  const coin = req.query.coin;
  const records = await CryptoStat.find({ coin }).sort({ timestamp: -1 }).limit(100);
  const prices = records.map(r => r.price);
  const mean = prices.reduce((sum, v) => sum + v, 0) / prices.length;
  const variance = prices.reduce((sum, v) => sum + (v - mean) ** 2, 0) / prices.length;
  const deviation = Math.sqrt(variance);

  res.json({ deviation: +deviation.toFixed(2) });
});

module.exports = router;
