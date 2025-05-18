const { connect } = require('nats');
const cron = require('node-cron');

async function startPublisher() {
  const nc = await connect({ servers: process.env.NATS_URL });

  cron.schedule('*/15 * * * *', () => {
    nc.publish('crypto.update', JSON.stringify({ trigger: 'update' }));
    console.log('Event published to NATS');
  });
}

module.exports = { startPublisher };
