/* eslint-disable no-undef */
const connection = require('../../config/connection');

const getPostByIdQuery = (id) => {
  sql = {
    text: 'SELECT * FROM posts WHERE id = $1',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = getPostByIdQuery;
