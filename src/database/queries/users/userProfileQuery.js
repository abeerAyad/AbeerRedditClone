/* eslint-disable no-undef */
const connection = require('../../config/connection');

const getUserIdQuery = (userId) => {
  sql = {
    // SELECT users.username, comments.* FROM comments JOIN users ON comments.user_id = users.id WHERE post_id = $1
    text: 'SELECT comments.*,users. username , users.id,posts.* FROM users JOIN posts ON posts.user_id = users.id JOIN comments ON comments.user_id = users.id  WHERE post_id = $1',
    values: [userId],
  };
  return connection.query(sql);
};
module.exports = getUserIdQuery;
