/* eslint-disable no-undef */
/* eslint-disable camelcase */
const connection = require('../../config/connection');

const voteQuery = ({ voteType, user_id, post_id }) => {
  sql = {
    text: 'INSERT INTO votes (vote_type, user_id, post_id) VALUES ($1,$2,$3) RETURNING *',
    values: [voteType, user_id, post_id],
  };
  return connection.query(sql);
};

module.exports = voteQuery;
