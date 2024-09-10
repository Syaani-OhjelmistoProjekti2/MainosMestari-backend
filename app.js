const express = require('express');
const cors = require('cors');
const addsRouter = require('./controllers/adds');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/adds', addsRouter);

module.exports = app;