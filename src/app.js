const express = require('express');
const body_parser = require('body-parser');
const app = express();
const UserRouter = require('./routes/auth');

app.use(body_parser.json());

app.use('/',UserRouter);

module.exports = app;
