const { Pool } = require('pg');
require('env2')('.env');

const connection = new Pool({
  connectionString: process.env.DB_URL,
  ssl: false,
});

module.exports = connection;
