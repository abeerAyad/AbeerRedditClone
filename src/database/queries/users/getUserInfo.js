/* eslint-disable no-undef */
const connection = require('../../config/connection');

const getUserInfo = (username) => {
  sql = {
    text: 'SELECT users.username, users.email,created_at, users.id FROM users WHERE username = $1',
    values: [username],
  };
  return connection.query(sql);
};

module.exports = getUserInfo;
