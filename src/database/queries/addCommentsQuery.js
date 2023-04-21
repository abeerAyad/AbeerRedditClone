/* eslint-disable no-undef */

const connection = require("../config/connection");

/* eslint-disable camelcase */
const addCommentsQuery = ({ comment, user_id, post_id }) => {
  sql = {
    text: 'INSERT INTO comments (comment, user_id, post_id)  VALUES ($1,$2,$3) RETURNING *',
    values: [comment, user_id, post_id],
  };
  return connection.query(sql);
};

module.exports = addCommentsQuery;
