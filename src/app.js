const express = require('express');
const app = express();
const jobRoutes = require('../routes/jobRoutes');

app.use(express.json());

app.use('/api/v1', jobRoutes);

module.exports = app;
