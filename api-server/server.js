require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const statsRoutes = require('./routes/stats');
const { startSubscriber } = require('./subscriber/index');

const app = express();
app.use(express.json());
app.use('/', statsRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => console.log(`API server running on port ${process.env.PORT}`));
   startSubscriber().catch(err => {
  console.error('Error starting NATS subscriber:', err);
});
  })
  .catch(console.error);
