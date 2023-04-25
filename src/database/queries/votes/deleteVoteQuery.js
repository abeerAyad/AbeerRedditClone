/* eslint-disable no-undef */
const connection = require('../../config/connection');

const deleteVoteQuery = (id) => {
  sql = {
    text: 'DELETE FROM votes WHERE id = $1 RETURNING id, vote_type',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = deleteVoteQuery;
