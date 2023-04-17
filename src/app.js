/* eslint-disable import/no-extraneous-dependencies */
const { join } = require('path');
const express = require('express');

const compression = require('compression');
const router = require('./routes/router');
const authRouter = require('./routes/authRouter');

require('env2')('.env');

const app = express();

app.disable('x-powered-by');
app.use(compression());

app.use(express.static(join(__dirname, '..', 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('port', process.env.PORT || 5000);

app.use(authRouter);
app.use(router);

module.exports = app;
