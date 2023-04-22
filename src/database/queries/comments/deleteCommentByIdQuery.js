/* eslint-disable no-undef */
const connection = require('../../config/connection');

const deleteCommentByIdQuery = (commentId) => {
  sql = {
    text: 'DELETE FROM comments WHERE id = $1',
    values: [commentId],
  };
  return connection.query(sql);
};

module.exports = deleteCommentByIdQuery;
