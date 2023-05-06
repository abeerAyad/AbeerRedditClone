/* eslint-disable no-undef */
const connection = require('../../config/connection');

const userSignupQuery = (addUser) => {
  const { username, email, password } = addUser;
  sql = {
    text:
      'INSERT INTO users (username,email,password) VALUES ($1,$2,$3) RETURNING id, username, email',
    values: [username, email, password],
  };
  return connection.query(sql);
};

module.exports = userSignupQuery;
