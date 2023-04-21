/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { Pool } = require('pg');
require('env2')('.env');

let dbUrl = '';
let ssl = false;
if (!process.env.DB_URL) throw new Error('No Database Url!');
if (process.env.NODE_ENV === 'production') {
  dbUrl = process.env.DB_URL;
  ssl = true;
} else if (process.env.NODE_ENV === 'development') {
  dbUrl = process.env.DEV_DB_URL;
}
if (!dbUrl) throw new Error('No Database URL!');

const connection = new Pool({
  connectionString: dbUrl,
  ssl,
});

module.exports = connection;
