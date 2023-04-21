/* eslint-disable no-undef */
const connection = require('../config/connection');

const userLoginQuery = (email) => {
  sql = {
    text: 'SELECT *  FROM users WHERE email = $1;',
    values: [email],
  };
  return connection.query(sql);
};

module.exports = userLoginQuery;
