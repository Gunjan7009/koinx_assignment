require('dotenv').config();
const cron = require('node-cron');
const { startPublisher } = require('./publisher');

startPublisher();

