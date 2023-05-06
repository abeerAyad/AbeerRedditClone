/* eslint-disable no-undef */
const connection = require('../../config/connection');

const getVotesQuery = (userId, postId) => {
  sql = {
    text: 'SELECT * FROM votes WHERE user_id=$1 and post_id=$2;',
    values: [userId, postId],
  };
  return connection.query(sql);
};
module.exports = getVotesQuery;
