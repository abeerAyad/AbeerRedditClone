/* eslint-disable no-undef */
const connection = require('../../config/connection');

const searchPostQuery = ({ searchTitle }) => {
  sql = {
    text: 'SELECT users.username,posts.* FROM posts JOIN users on posts.user_id = users.id WHERE title ILIKE $1',
    values: [`%${searchTitle}%`],
  };
  return connection.query(sql);
};

module.exports = searchPostQuery;
