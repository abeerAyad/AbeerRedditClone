/* eslint-disable no-undef */
const connection = require('../../config/connection');

const getPostCommentsQuery = (postId) => {
  sql = {
    text: ' SELECT users.username, comments.* FROM comments JOIN users on comments.user_id = users.id WHERE post_id = $1 ORDER BY comments.created_at;',
    values: [postId],
  };
  return connection.query(sql);
};

module.exports = getPostCommentsQuery;
