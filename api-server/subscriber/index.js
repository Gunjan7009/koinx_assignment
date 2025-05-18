const { connect } = require('nats');
const { storeCryptoStats } = require('../services/storeStats');

async function startSubscriber() {
  const nc = await connect({ servers: process.env.NATS_URL });
  console.log(`Connected to NATS at ${process.env.NATS_URL}`);
  const sub = nc.subscribe('crypto.update');
  for await (const msg of sub) {
     console.log('Received update trigger from NATS.');
    await storeCryptoStats();
  }
}

module.exports = { startSubscriber };
