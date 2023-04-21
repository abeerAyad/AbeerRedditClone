/* eslint-disable no-undef */
const connection = require('../../config/connection');

const getPostCommentsQuery = (postId) => {
  sql = {
    text: 'SELECT * FROM comments WHERE post_id = $1',
    values: [postId],
  };
  return connection.query(sql);
};

module.exports = getPostCommentsQuery;
