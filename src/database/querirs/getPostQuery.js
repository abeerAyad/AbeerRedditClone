const connection = require('../config/connection');

const getPostQuery = () => {
  // eslint-disable-next-line no-undef
  sql = {
    text: 'SELECT users.username,posts.* FROM posts JOIN users on posts.user_id = users.id;',
  };
  // eslint-disable-next-line no-undef
  return connection.query(sql);
};

module.exports = getPostQuery;
