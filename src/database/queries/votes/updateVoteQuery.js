const connection = require('../../config/connection');

/* eslint-disable no-undef */
const updateVoteQuery = (voteUpdate, id) => {
  sql = {
    text: 'UPDATE votes SET vote_type = $1 WHERE id = $2 RETURNING *',
    values: [voteUpdate, id],
  };
  return connection.query(sql);
};

module.exports = updateVoteQuery;
