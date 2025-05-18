// require('dotenv').config();
// const cron = require('node-cron');
// const { startPublisher } = require('./publisher');

// startPublisher();

require('dotenv').config();
const express = require('express');
const { startPublisher } = require('./publisher');

const app = express();
const PORT = process.env.PORT || 3000;

// Start the background publisher
startPublisher();

// Minimal route just to keep Render happy
app.get('/', (req, res) => {
  res.send('Worker service is running with NATS job.');
});

// Bind to port for Render deployment
app.listen(PORT, () => {
  console.log(`Worker service is listening on port ${PORT}`);
});
