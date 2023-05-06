/* eslint-disable no-undef */
const connection = require('../../config/connection');

const deletePostQuery = (id) => {
  // eslint-disable-next-line no-undef
  sql = {
    text: 'DELETE FROM posts WHERE id=$1',
    values: [id],
  };
  // eslint-disable-next-line no-undef
  return connection.query(sql);
};

module.exports = deletePostQuery;
